from .common import *  # базовые
from .ldap_auth import *  # настройки LDAP авторизация

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'django',
        'USER':'django',
        'PASSWORD':'django',
        'HOST':'',
        'PORT':'',
    }
}

SECRET_KEY = env('DJANGO_SECRET_KEY')

# DATABASE CONFIGURATION
# ------------------------------------------------------------------------------
# Raises ImproperlyConfigured exception if DATABASE_URL not in os.environ
DATABASES['default'] = env.db('DATABASE_URL')

AUTHENTICATION_BACKENDS = [
    'django_remote_auth_ldap.backend.RemoteUserLDAPBackend',
]

MIDDLEWARE_CLASSES += [
    'django.contrib.auth.middleware.RemoteUserMiddleware',
]

