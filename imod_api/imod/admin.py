from django.contrib import admin
from .models import Product, News, Category, Vacancy, Image, ImageProduct, ContactFormSubmission, Services, Gallery, Partners



admin.site.register(Product)
admin.site.register(Partners)
admin.site.register(News)
admin.site.register(Category)
admin.site.register(Vacancy)
admin.site.register(Image)
admin.site.register(Gallery)
admin.site.register(Services)
admin.site.register(ImageProduct)
admin.site.register(ContactFormSubmission)