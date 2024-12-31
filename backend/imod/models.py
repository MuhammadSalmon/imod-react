from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=255)
    details = models.CharField(max_length=255)
    description = models.TextField()
    specifications = models.CharField(max_length=255)
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class News(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    custom_date = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.title

class Image(models.Model): 
    news = models.ForeignKey(News, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='news_images/')

    def __str__(self):
        return f"Image for {self.news.title}"

class ImageProduct(models.Model):
    product = models.ForeignKey(Product, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='product_images/')

    def __str__(self):
        return f"Image for {self.product.name}"

class Vacancy(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    location = models.CharField(max_length=255)
    image = models.ImageField(upload_to='vacancies/', null=True, blank=True)

    def __str__(self):
        return self.title

class ContactFormSubmission(models.Model):
    first_name = models.CharField(max_length=100, verbose_name="First Name")
    email = models.EmailField(verbose_name="Email")
    phone_number = models.CharField(max_length=15, verbose_name="Phone Number")
    query = models.TextField(verbose_name="Query")
    submitted_at = models.DateTimeField(auto_now_add=True, verbose_name="Submitted At")

    def __str__(self):
        return f"Contact Form Submission from {self.first_name} ({self.email})"
    
    

class Services(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='services/', null=False, blank=False)

class Gallery(models.Model):
    image = models.ImageField(upload_to='gallery', null=False, blank=False)
class Partners(models.Model):
    image = models.ImageField(upload_to='gallery', null=False, blank=False)
