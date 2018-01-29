from django.shortcuts import render




homepage = {
  'male': 'Wale',
  'female': 'Seun',
  'title': 'OlaOluwaseun'

}

eventpage = {
    
  'title2': 'OlaOluwaseun | Events'
}


def home(request):
  return render(request, 'home.html', homepage)


def events(request):
  return render(request, 'events.html')


def gallery(request):
  return render(request, 'gallery.html')


def people(request):
  return render(request, 'people.html')


def wishes(request):
  return render(request, 'wishes.html')
