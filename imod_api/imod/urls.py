from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, ProductViewSet, NewsViewSet, VacancyViewSet, ContactFormSubmissionViewSet, ServicesViewSet, GalleryViewSet, PartnerViewSet

# Create a router and register our viewsets with it
router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'partners', PartnerViewSet)
router.register(r'products', ProductViewSet)
router.register(r'news', NewsViewSet)
router.register(r'services', ServicesViewSet)
router.register(r'gallery', GalleryViewSet)
router.register(r'vacancies', VacancyViewSet)
router.register(r'contact', ContactFormSubmissionViewSet, basename='contact')

# The API URLs are now determined automatically by the router
urlpatterns = [
    path('api/', include(router.urls)),
    
]
