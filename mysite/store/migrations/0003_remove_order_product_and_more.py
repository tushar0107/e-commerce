# Generated by Django 4.2.3 on 2023-07-29 16:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0002_remove_order_quantity_orderitem_quantity'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='product',
        ),
        migrations.RemoveField(
            model_name='orderitem',
            name='delivery_address',
        ),
        migrations.RemoveField(
            model_name='orderitem',
            name='payment_mode',
        ),
        migrations.RemoveField(
            model_name='orderitem',
            name='payment_status',
        ),
        migrations.AddField(
            model_name='order',
            name='delivery_address',
            field=models.CharField(default='none', max_length=300),
        ),
        migrations.AddField(
            model_name='order',
            name='payment_mode',
            field=models.CharField(choices=[('', ''), ('Cash on Delivery', 'COD'), ('Debit Card', 'Debit Card'), ('UPI', 'UPI')], default='', max_length=20),
        ),
        migrations.AddField(
            model_name='order',
            name='payment_status',
            field=models.CharField(choices=[('Paid', 'Paid'), ('Pending', 'Pending')], default='Pending', max_length=20),
        ),
        migrations.AddField(
            model_name='orderitem',
            name='product',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='store.product'),
        ),
    ]
