from django.conf.urls import url
from .views import *

urlpatterns = [

    url(r'^$', HomePageView.as_view(), name='home'),
    #url(r'^customers/$', CustomersView.as_view(), name='customers'),
    #url(r'^sertificates/$', SertificatesView.as_view(), name='sertificates'),
]