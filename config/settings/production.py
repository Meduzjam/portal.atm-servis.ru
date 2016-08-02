from .common import *  # базовые
import ldap
from django_auth_ldap.config import LDAPSearch,LDAPSearchUnion,GroupOfNamesType

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

"""
Настройки LDAP

"""

AUTHENTICATION_BACKENDS = [
    'django_remote_auth_ldap.backend.RemoteUserLDAPBackend',
]

MIDDLEWARE_CLASSES += [
    'django.contrib.auth.middleware.RemoteUserMiddleware',
]

# Baseline LDAP configuration.
AUTH_LDAP_SERVER_URI = "ldap://atm-servis.ru:389"
AUTH_LDAP_AUTHORIZE_ALL_USERS = True
AUTH_LDAP_PERMIT_EMPTY_PASSWORD = True

# Логин пользователя от чьего имени будут выполнятся запросы к LDAP (кроме авторизации)
AUTH_LDAP_BIND_DN = "cn=srv-apache,cn=Users,dc=atm-servis,dc=ru"
AUTH_LDAP_BIND_PASSWORD = "P@ssw0rd"

# Настройка будет пытаться найти пользователя в созданной нами OU Django и стандартной папке Users, 
# сопоставляя введенный login пользователя с аттрибутами sAMAccountName
AUTH_LDAP_USER_SEARCH = LDAPSearchUnion(
        LDAPSearch("ou=АТМ-Сервис,ou=Самара,ou=Штаты,ou=AG SamSibintek,dc=atm-servis,dc=ru", ldap.SCOPE_SUBTREE, "(sAMAccountName=%(user)s)"),
        LDAPSearch("cn=Users,dc=atm-servis,dc=ru", ldap.SCOPE_SUBTREE, "(sAMAccountName=%(user)s)"),
)

# Set up the basic group parameters.
AUTH_LDAP_GROUP_SEARCH = LDAPSearch("cn=Users,dc=atm-servis,dc=ru", ldap.SCOPE_SUBTREE, "(objectClass=group)"
)
AUTH_LDAP_GROUP_TYPE = GroupOfNamesType(name_attr="cn")

# Simple group restrictions
# AUTH_LDAP_REQUIRE_GROUP - если определено DN для этой настройки, то требуется присутсвие пользователя в этой группе
# в противном случае пользовталю будет отказано в аутентификации
# таким образом указываем, что для того чтобы пользователь был аутентифицирован он обязан находится в группе "active"
#AUTH_LDAP_REQUIRE_GROUP = "cn=active,ou=Groups,ou=portal,dc=atm-servis,dc=ru"
#AUTH_LDAP_REQUIRE_GROUP = "ou=portal,dc=atm-servis,dc=ru"

# AUTH_LDAP_DENY_GROUP - если определено DN для этой настройки, то в случае члентсва пользователя в этой группе
# ему будет отказано в аутентификации
#AUTH_LDAP_DENY_GROUP = "cn=disabled,ou=Groups,ou=portal,dc=atm-servis,dc=ru"

# Populate the Django user from the LDAP directory.
# Указываем как переносить данные из AD в стандартный профиль пользователя Django
AUTH_LDAP_USER_ATTR_MAP = {
    "first_name": "givenName",
    "last_name": "sn",
    "email": "mail"
}
# Указываем как переносить данные из AD в расширенный профиль пользователя Django
#AUTH_LDAP_PROFILE_ATTR_MAP = {
#    "title": "title"
#}

# Указываем привязку стандартных флагов is_active, is_staff и is_superuser к членству в группах AD
# Флаг is_active при использовании django_remote_auth_ldap сам по себе не оказывает вляния на разрешение аутнтификации
# поэтому для создания обычного поведения Django также определяме настройку AUTH_LDAP_REQUIRE_GROUP (см.выше)
AUTH_LDAP_USER_FLAGS_BY_GROUP = {
    #"is_active": "cn=active,ou=Groups,ou=portal,dc=atm-servis,dc=ru",
    "is_staff": "cn=Отдел ПО,cn=Users,dc=atm-servis,dc=ru",
    "is_superuser": "cn=portal,cn=Users,dc=atm-servis,dc=ru"
}

# Указываем привязку флагов расширенного профиля к членству в группах AD
#AUTH_LDAP_PROFILE_FLAGS_BY_GROUP = {
#    "is_awesome": "cn=awesome,ou=Groups,ou=portal,dc=atm-servis,dc=ru",
#}

# This is the default, but I like to be explicit.
AUTH_LDAP_ALWAYS_UPDATE_USER = True

# Use LDAP group membership to calculate group permissions.
AUTH_LDAP_FIND_GROUP_PERMS = True

# Cache group memberships for an hour to minimize LDAP traffic
AUTH_LDAP_CACHE_GROUPS = True
AUTH_LDAP_GROUP_CACHE_TIMEOUT = 3600

#django-remote-auth-ldap
DRAL_CHECK_DOMAIN = False