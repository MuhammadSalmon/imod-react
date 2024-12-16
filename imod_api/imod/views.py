from rest_framework import viewsets, permissions
from rest_framework.permissions import AllowAny
from .models import Category, Product, News, Vacancy, Image, ContactFormSubmission, Services, Gallery, Partners
from .serializers import CategorySerializer, ProductSerializer, NewsSerializer,PartnerSerializer, VacancySerializer, ImageSerializer, ContactFormSubmissionSerializer, ServicesSerializer, GallerySerializer
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status

class IsAdminOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user and request.user.is_staff

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAdminOrReadOnly]

class ContactFormSubmissionViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for listing, retrieving, creating, updating, and deleting contact form submissions.
    """
    queryset = ContactFormSubmission.objects.all()
    serializer_class = ContactFormSubmissionSerializer
    permission_classes = [AllowAny]

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAdminOrReadOnly]

class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [IsAdminOrReadOnly]

    def create(self, request, *args, **kwargs):
        news_serializer = NewsSerializer(data=request.data)
        if news_serializer.is_valid():
            news = news_serializer.save()
            images = request.FILES.getlist('images')
            for image in images:
                Image.objects.create(news=news, image=image)
            return Response(news_serializer.data, status=status.HTTP_201_CREATED)
        return Response(news_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class VacancyViewSet(viewsets.ModelViewSet):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    permission_classes = [IsAdminOrReadOnly]

class ServicesViewSet(viewsets.ModelViewSet):
    queryset = Services.objects.all()
    serializer_class = ServicesSerializer
    permission_classes = [IsAdminOrReadOnly]

class GalleryViewSet(viewsets.ModelViewSet):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer
    permission_classes = [IsAdminOrReadOnly]

class PartnerViewSet(viewsets.ModelViewSet):
    queryset = Partners.objects.all()
    serializer_class = PartnerSerializer
    permission_classes = [IsAdminOrReadOnly]
