# Generated by Django 4.2.5 on 2023-10-10 12:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0008_alter_orderitem_details'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customer',
            name='first_name',
        ),
        migrations.RemoveField(
            model_name='customer',
            name='last_name',
        ),
    ]
