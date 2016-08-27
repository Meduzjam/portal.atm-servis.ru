from django.conf.urls import url
from .views import *

urlpatterns = [

    #url(r'^$', HomePageView.as_view(), name='index'),
    url(r'^$', index, name='index'),
    url(r'^(?P<path>.*)/$', index),
    #url(r'^sertificates/$', SertificatesView.as_view(), name='sertificates'),
]