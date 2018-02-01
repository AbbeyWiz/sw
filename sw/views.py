from django.shortcuts import render
from django.http import HttpResponse
import os 



homepage = {
  'class': 'homeheader',
  'male': 'Wale',
  'female': 'Seun',
  'title': 'OlaOluwaseun',
}

eventpage = {
  'title': 'Events & Programmes',
  'male': 'Wale',
  'female': 'Seun'
}


gallerypage = {
  
}


def home(request):
  return render(request, 'home.html', homepage)


def events(request):
  return render(request, 'events.html', eventpage)


def gallery(request):
  return render(request, 'gallery.html', gallerypage)


def people(request):
  return render(request, 'people.html')


def wishes(request):
  return render(request, 'wishes.html')






def gallery(request):
    path="/Users/AbbeyLashly/Sites/sw/sw/static/images/gallery/" # insert the path to your directory   
    img_list =os.listdir(path)   
    return render(request, 'gallery.html', {'title': 'Photo Gallery',
  'class': 'gallery',
  'male': 'Wale',
  'female': 'Seun','images': img_list})

