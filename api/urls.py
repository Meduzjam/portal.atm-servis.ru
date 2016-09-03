from django.conf.urls import url,include
from tastypie.api import Api
from .resources import *

v1_api = Api(api_name='v1')
v1_api.register(PlanResource())
v1_api.register(PlanProjectsResource())
v1_api.register(ProjectResource())
v1_api.register(TaskResource())
v1_api.register(PlanTaskOwnerResource())


urlpatterns = [
    url(r'^api/', include(v1_api.urls)),
    ]