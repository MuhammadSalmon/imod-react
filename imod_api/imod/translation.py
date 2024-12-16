# translation.py
from modeltranslation.translator import register, TranslationOptions
from .models import Category, Product, News, Vacancy, Image, ImageProduct, Services

@register(Category)
class CategoryTranslationOptions(TranslationOptions):
    fields = ('name',)

@register(Product)
class ProductTranslationOptions(TranslationOptions):
    fields = ('name', 'description', 'details', 'specifications')
@register(Services)
class ServicesTranslationOptions(TranslationOptions):
    fields = ('name', 'description')

@register(News)
class NewsTranslationOptions(TranslationOptions):
    fields = ('title', 'content')

@register(Vacancy)
class VacancyTranslationOptions(TranslationOptions):
    fields = ('title', 'description', 'location')

@register(Image)
class ImageTranslationOptions(TranslationOptions):
    fields = ()  # No fields to translate here unless you add titles or descriptions to images
@register(ImageProduct)
class ImageProductTranslationOptions(TranslationOptions):
    fields = ()  # No fields to translate here unless you add titles or descriptions to images
