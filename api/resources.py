from tastypie.resources import ModelResource, ALL, ALL_WITH_RELATIONS
from plan.models import Plan, Project, ProjectPlan, Task, PlanTaskOwner
from tastypie.api import Api
from tastypie import fields
from tastypie.authentication import SessionAuthentication
from django.conf.urls import url
from django.core.urlresolvers import reverse
from tastypie.utils import trailing_slash
from django.contrib.auth.models import User

import logging

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
		}

	# get children task by ID
	def get_children(self, request, **kwargs):
		self.method_check(request, ['get', ])
		return TaskResource().get_list(request, parent=kwargs['pk'])

	def prepend_urls(self):
		return [
			url(r'^(?P<resource_name>%s)/(?P<pk>\w[\w/-]*)/children%s$' % (self._meta.resource_name, trailing_slash()),
				self.wrap_view('get_children'),
				name='api_get_children_for_task')
			]

	def dehydrate(self, bundle):
		kwargs = dict(api_name='v1', resource_name=self._meta.resource_name, pk=bundle.data['id'])
		bundle.data['children'] = reverse('api_get_children_for_task', kwargs=kwargs)
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
