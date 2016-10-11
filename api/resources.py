from tastypie.resources import ModelResource, ALL, ALL_WITH_RELATIONS
from plan.models import Plan, Project, ProjectPlan, Task, PlanTaskOwner
from main.models import Department
from tastypie.api import Api
from tastypie import fields
from tastypie.authentication import SessionAuthentication,Authentication
from tastypie.authorization import Authorization
from django.conf.urls import url
from django.core.urlresolvers import reverse
from tastypie.utils import trailing_slash
from django.contrib.auth.models import User
from django.forms.models import model_to_dict

class DepartmentResource(ModelResource):
	class Meta:
		queryset = Department.objects.all()
		resource_name = 'department'
		fields = ['id','name','code']
		allowed_methods = ['get', 'post', 'put', 'delete']
		include_resource_uri = False
		always_return_data = True
		authentication = Authentication()
		authorization = Authorization()

class UserResource(ModelResource):
	class Meta:
		queryset = User.objects.all()
		resource_name = 'user'
		fields = ['id','username']
		allowed_methods = ['get']
		include_resource_uri = False
		authentication = SessionAuthentication()

class ProjectResource(ModelResource):
	class Meta:
		queryset = Project.objects.all()
		resource_name = 'project'
		fields = ['id','name']
		allowed_methods = ['get']
		include_resource_uri = False
		authentication = SessionAuthentication()


class PlanResource(ModelResource):
	department = fields.ForeignKey('self', 'department', full=True)	

	class Meta:
		queryset = Plan.objects.all()
		resource_name = 'plan'
		fields = ['id','department','year']
		allowed_methods = ['get','post','put']
		include_resource_uri = False
		authentication = SessionAuthentication()
		filtering = {
			'id': ALL,
			'year': ALL,
			'department': ALL_WITH_RELATIONS,
		}

	def get_projects(self, request, **kwargs):
		self.method_check(request, ['get', ])
		return PlanProjectsResource().get_list(request, plan=kwargs['pk'])

	def prepend_urls(self):
		return [
			url(r'^(?P<resource_name>%s)/(?P<pk>\w[\w/-]*)/projects%s$' % (self._meta.resource_name, trailing_slash()),
				self.wrap_view('get_projects'),
				name='api_get_projects_for_plan')
			]

	def dehydrate(self, bundle):
		kwargs = dict(api_name='v1', resource_name=self._meta.resource_name, pk=bundle.data['id'])
		bundle.data['projects'] = reverse('api_get_projects_for_plan', kwargs=kwargs)

		return bundle

class TaskResource(ModelResource):
	perent = fields.ForeignKey('self', 'parent', full=False, null=True)	
	parent_id = fields.IntegerField(attribute='parent_id', null=True)

	class Meta:
		queryset = Task.objects.all()
		resource_name = 'task'
		fields = ['id','name','parent']
		allowed_methods = ['get']
		include_resource_uri = False
		authentication = SessionAuthentication()
		filtering = {
			'id': ALL_WITH_RELATIONS,
			'parent': ALL_WITH_RELATIONS,
			'parent_id': ALL_WITH_RELATIONS,
		}

	# get children task by ID
	# def get_children(self, request, **kwargs):
		
	# 	self.method_check(request, allowed=['get'])
	# 	self.is_authenticated(request)
	# 	self.throttle_check(request)

	# 	# Do the query.
	# 	sqs = Task.objects.filter(parent_id=kwargs['pk'])
	# 	paginator = Paginator(sqs, 20)

	# 	try:
	# 		page = paginator.page(int(request.GET.get('page', 1)))
	# 	except InvalidPage:
	# 		raise Http404("Sorry, no results on that page.")

	# 	objects = []

	# 	for result in page.object_list:
	# 		bundle = self.build_bundle(obj=result.object, request=request)
	# 		bundle = self.full_dehydrate(bundle)
	# 		objects.append(bundle)

	# 	object_list = {
	# 		'objects': objects,
	# 	}

	# 	self.log_throttled_access(request)
	# 	return self.create_response(request, object_list)
	def get_children(self, request, **kwargs):
		
		self.method_check(request, ['get', ])
		return TaskResource().get_list(request, parent_id=kwargs['pk'])

	def prepend_urls(self):
		return [
			url(r'^(?P<resource_name>%s)/(?P<pk>\w[\w/-]*)/children%s$' % (self._meta.resource_name, trailing_slash()),
				self.wrap_view('get_children'),
				name='api_get_children_for_task')
			]

	def dehydrate(self, bundle):
		kwargs = dict(api_name='v1', resource_name=self._meta.resource_name, pk=bundle.data['id'])
		bundle.data['children'] = reverse('api_get_children_for_task', kwargs=kwargs)
		# bundle.data['user'] = bundle.request.user
		# bundle.data['user_id'] = bundle.request.user.id
		# bundle.data['user_fname'] = bundle.request.user.first_name
		return bundle


class PlanProjectsResource(ModelResource):
	# project = fields.ForeignKey(ProjectResource, 'project', full=True)
	# plan = fields.ForeignKey(PlanResource, 'plan', full=True)
	project = fields.ForeignKey(ProjectResource, 'project', full=True)
	plan = fields.ForeignKey(PlanResource, 'plan', full=False)
	#task = fields.ToManyField(TaskResource, 'task', full=False,null=True)
	class Meta:
		queryset = ProjectPlan.objects.all()
		resource_name = 'planprojects'
		fields = ['id','plan','project'] #,'task'
		excludes = ['plan','project'];
		allowed_methods = ['get']
		include_resource_uri = False
		authentication = SessionAuthentication()
		filtering = {
			'plan': ALL_WITH_RELATIONS,
		}

	def get_tasks(self, request, **kwargs):
		self.method_check(request, ['get', ])
		return PlanTaskOwnerResource().get_list(request, projectplan=kwargs['pk'])

	def prepend_urls(self):
		return [
			url(r'^(?P<resource_name>%s)/(?P<pk>\w[\w/-]*)/tasks%s$' % (self._meta.resource_name, trailing_slash()),
				self.wrap_view('get_tasks'),
				name='api_get_tasks_for_planproject')
			]

	def dehydrate(self, bundle):
		kwargs = dict(api_name='v1', resource_name=self._meta.resource_name, pk=bundle.data['id'])
		bundle.data['tasks'] = reverse('api_get_tasks_for_planproject', kwargs=kwargs)
		return bundle

class PlanTaskOwnerResource(ModelResource):
	# project = fields.ForeignKey(ProjectResource, 'project', full=True)
	# plan = fields.ForeignKey(PlanResource, 'plan', full=True)
	projectplan = fields.ForeignKey(PlanProjectsResource, 'projectplan', full=False)
	task = fields.ForeignKey(TaskResource, 'task', full=True, null=True)
	owner = fields.ForeignKey(UserResource, 'owner', full=True, null=True)
	#planprojects = fields.ForeignKey(PlanProjectsResource, 'task', full=True, null=True)
	class Meta:
		queryset = PlanTaskOwner.objects.all()
		resource_name = 'plantask'
		#fields = ['id','task']
		allowed_methods = ['get']
		include_resource_uri = False
		authentication = SessionAuthentication()
		filtering = {
			'projectplan': ALL_WITH_RELATIONS,
			'task': ALL_WITH_RELATIONS,
			'owner': ALL_WITH_RELATIONS,
		}

	def dehydrate(self, bundle):
		return bundle


#class SertificatesResource(ModelResource):
	#Type = fields.ForeignKey(SertificateTypesResource, 'Type', full=True)
#	class Meta:
#		queryset = Sertificates.objects.all()
#		resource_name = 'sertificates'
#		fields = ['id','Title','Type','File']
#		allowed_methods = ['get']
#		include_resource_uri = False
