from django.db import models
from django.contrib.auth.models import User
from mptt.models import MPTTModel, TreeForeignKey
import datetime

class Project(models.Model):
	class Meta:
		db_table = 'project'
		verbose_name = 'проект'
		verbose_name_plural = 'проекты'

	name = models.CharField(
		max_length=255,
		verbose_name='название',
	)

	def __str__(self):
		return self.name	

class Task(MPTTModel):
	class Meta:
		db_table = 'project_task'
		verbose_name = 'задача'
		verbose_name_plural = 'задачи'

	name = models.CharField(
		max_length=255,
		verbose_name='название',
	)

	parent = TreeForeignKey(
		'self', 
		null=True, 
		blank=True, 
		related_name='children', 
		db_index=True)
    


	def __str__(self):
		return self.name

class Plan(models.Model):
	class Meta:
		db_table = 'project_plan'
		verbose_name = 'план'
		verbose_name_plural = 'план'
		unique_together = (('department','year'),)

	PROGRAM = 'PG'
	DESIGN = 'DE'
	IMPLEMENT = 'IM'

	DEPARTMENT_CHOICES = (
		(PROGRAM, 'Разработка ПО'),
		(DESIGN, 'Проектирование'),
		(IMPLEMENT, 'Внедрение'),
	)

	department = models.CharField(
		verbose_name='отдел',
		max_length=2,
		choices=DEPARTMENT_CHOICES, 
		default=PROGRAM,
	)

	YEAR_CHOICES = [(r,r) for r in range(datetime.date.today().year, datetime.date.today().year+5)]
	
	year = models.IntegerField(
		verbose_name='год',
		choices=YEAR_CHOICES, 
		default=datetime.date.today().year+1,
	)

	def __str__(self):
		return self.department + str(self.year)

class PlanTask(models.Model):
	class Meta:
		db_table = 'project_plan_task'
		verbose_name = 'задача плана'
		verbose_name_plural = 'задачи плана'
		unique_together = (('plan','project'),)

	plan = models.ForeignKey(
		Plan,
		on_delete=models.CASCADE,
	)

	project = models.ForeignKey(
		Project,
		on_delete=models.CASCADE,
	)

	task = models.ManyToManyField(
		Task,
	)
	
	