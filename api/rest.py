from tastypie.resources import ModelResource, ALL, ALL_WITH_RELATIONS
from plan.models import Plan, Project, ProjectPlan, Task, PlanTaskOwner
from tastypie.api import Api
from tastypie import fields
from tastypie.authentication import SessionAuthentication




class ProjectResource(ModelResource):
	class Meta:
		queryset = Project.objects.all()
		resource_name = 'project'
		fields = ['id','name']
		allowed_methods = ['get']
		include_resource_uri = False
		authentication = SessionAuthentication()


class PlanResource(ModelResource):
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
			'department': ALL,
		}

	def dehydrate(self, bundle):
		# bundle.data['http'] = bundle.obj;
		return bundle;

class TaskResource(ModelResource):
	perent = fields.ForeignKey('self', 'parent', full=True, null=True)	
	class Meta:
		queryset = Task.objects.all()
		resource_name = 'task'
		fields = ['id','name','parent']
		allowed_methods = ['get']
		include_resource_uri = False
		authentication = SessionAuthentication()
		filtering = {
			'id': ALL,
		}

class PlanProjectsResource(ModelResource):
	# project = fields.ForeignKey(ProjectResource, 'project', full=True)
	# plan = fields.ForeignKey(PlanResource, 'plan', full=True)
	project = fields.ToOneField(ProjectResource, 'project', full=True)
	plan = fields.ToOneField(PlanResource, 'plan', full=True)
	#task = fields.ForeignKey(TaskResource, 'task', full=True)
	class Meta:
		queryset = ProjectPlan.objects.all()
		resource_name = 'planprojects'
		fields = ['id','plan','project'] #,'task'
		#excludes = ['plan','project'];
		allowed_methods = ['get']
		include_resource_uri = False
		authentication = SessionAuthentication()
		filtering = {
			'plan': ALL_WITH_RELATIONS,
		}

	def dehydrate(self, bundle):
		return bundle

class PlanTaskOwnerResource(ModelResource):
	# project = fields.ForeignKey(ProjectResource, 'project', full=True)
	# plan = fields.ForeignKey(PlanResource, 'plan', full=True)
	projectplan = fields.ForeignKey(PlanProjectsResource, 'projectplan', full=False)
	task = fields.ToManyField(TaskResource, 'task', full=True)
	class Meta:
		queryset = PlanTaskOwner.objects.all()
		resource_name = 'plantask'
		#fields = ['id','task']
		allowed_methods = ['get']
		include_resource_uri = False
		authentication = SessionAuthentication()
		filtering = {
			#'projectplan': ALL_WITH_RELATIONS,
			#'task': ALL_WITH_RELATIONS,
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
