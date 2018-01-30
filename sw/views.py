from django.shortcuts import render




homepage = {
  'class': 'homeheader',
  'male': 'Wale',
  'female': 'Seun',
  'title': 'OlaOluwaseun',



}

eventpage = {
  'title': 'OlaOluwaseun | Events',
  'male': 'Wale',
  'female': 'Seun'
}


gallerypage = {
  'title': 'OlaOluwaseun | Gallery',
  'class': 'gallery',
  'male': 'Wale',
  'female': 'Seun'
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
