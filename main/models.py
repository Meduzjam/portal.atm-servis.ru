from django.db import models
from django.contrib.auth.models import User
import django_auth_ldap.backend

class Profile(models.Model):
    """model to represent additional information about users"""
    class Meta:
        db_table = 'user_profile'
        verbose_name = 'профиль пользователя'
        verbose_name_plural = 'профили пользователей'

    user = models.OneToOneField(User)

    title = models.CharField(
        max_length=255,
        verbose_name='должность',
        blank=True
    )
    def __str__(self):
        return self.user.first_name + ' ' + self.user.last_name

# Create your models here.


def update_profile(sender, user=None, ldap_user=None, **kwargs):

    title = ldap_user.attrs.get("title", [])

    try:
        user.profile.title = title
    except User.profile.RelatedObjectDoesNotExist:
        Profile.objects.create(user=user, title = title)
       



# подвязываемся к сигналу бэкэнда ldap аутентификации
django_auth_ldap.backend.populate_user.connect(update_profile)