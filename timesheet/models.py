from django.db import models
from django.contrib.auth.models import User
#from .project.models import 

class Timesheet(models.Model):
	class Meta:
		db_table = 'timesheet_day'
		verbose_name = 'день'
		verbose_name_plural = 'дни'

	date = models.DateField(
		verbose_name='дата',
	)

	user = models.ForeignKey(
		User,
		on_delete=models.CASCADE,
		#related_name="Дни",
		#related_query_name="day",
	)

class Works(models.Model):
	class Meta:
		db_table = 'timesheet_works'
		verbose_name = 'работы'

	timesheet = models.ForeignKey(
		Timesheet,
		on_delete=models.CASCADE,
	)

	comment = models.CharField(
		max_length=255,
		verbose_name='комментарий',
		blank=True,
	)
