from tastypie.resources import ModelResource
from project.models import Plan
from tastypie.api import Api
from tastypie import fields

class PlanResource(ModelResource):
	class Meta:
		queryset = Plan.objects.all()
		resource_name = 'plan'
		fields = ['department','year']
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
