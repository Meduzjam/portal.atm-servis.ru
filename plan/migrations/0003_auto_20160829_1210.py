# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-08-29 08:10
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import django.db.models.manager
import mptt.fields


class Migration(migrations.Migration):

    dependencies = [
        ('plan', '0002_auto_20160829_1204'),
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='название')),
                ('lft', models.PositiveIntegerField(db_index=True, editable=False)),
                ('rght', models.PositiveIntegerField(db_index=True, editable=False)),
                ('tree_id', models.PositiveIntegerField(db_index=True, editable=False)),
                ('level', models.PositiveIntegerField(db_index=True, editable=False)),
                ('parent', mptt.fields.TreeForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='children', to='plan.Task')),
            ],
            options={
                'verbose_name': 'задача',
                'verbose_name_plural': 'задачи',
                'db_table': 'prj_task',
            },
            managers=[
                ('_default_manager', django.db.models.manager.Manager()),
            ],
        ),
        migrations.RemoveField(
            model_name='task2',
            name='parent',
        ),
        migrations.AlterField(
            model_name='plantaskowner',
            name='task',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='plan.Task', verbose_name='задача'),
        ),
        migrations.AlterField(
            model_name='projectplan',
            name='task',
            field=models.ManyToManyField(through='plan.PlanTaskOwner', to='plan.Task', verbose_name='задачи'),
        ),
        migrations.DeleteModel(
            name='Task2',
        ),
    ]
