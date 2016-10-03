from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import *

admin.site.unregister(User)


class UserProfileInline(admin.StackedInline):
    model = Profile

class UserProfileAdmin(UserAdmin):
    inlines = [ UserProfileInline, ]

admin.site.register(User, UserProfileAdmin)
admin.site.register(Department)
# Register your models here.
