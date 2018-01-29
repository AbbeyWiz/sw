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


def couple(request):
  return render(request, 'couple.html')


def events(request):
  return render(request, 'events.html', eventpage)
