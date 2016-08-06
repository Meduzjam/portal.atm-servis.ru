from tastypie.resources import ModelResource, ALL, ALL_WITH_RELATIONS
from plan.models import Plan, Project, ProjectPlan
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
			'year': ALL,
			'department': ALL,
		}


	def dehydrate(self, bundle):
		 return bundle

class ProjectPlanResource(ModelResource):
	project = fields.ForeignKey(ProjectResource, 'project', full=True)
	plan = fields.ForeignKey(PlanResource, 'plan', full=True)

	class Meta:
		queryset = ProjectPlan.objects.all()
		resource_name = 'projectplan'
		fields = ['id','plan_id','project']
		allowed_methods = ['get']
		include_resource_uri = False

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
