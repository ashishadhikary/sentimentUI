from react_integration.settings import TEMPLATES
from django.http import HttpResponse
from django.shortcuts import render
import joblib
from django.template.response import TemplateResponse

def index(request):
     print(request.GET)
     if request.method == 'GET' and 'input-form' in request.GET:   
          P = joblib.load('finalized_model3.sav')
          lis1=[]
          lis1.append(request.GET['input-form'])
          answer1=P.predict(lis1)
          print(answer1)
          return render(request,"index.html",{'text1':answer1})  
          print("the request iss in method1")
     else:
          print("request not in method")
          sainterface=TemplateResponse(request,'index.html',{})
          return sainterface
          #return render(request,"/sa_interface/build`/index.html")
     # answer=1
     # if request.method == 'GET' and 'q' in request.GET:
     #      q=request.GET['q']
     #      if q:
     #           print("There is some value")
     #           return render(request,"index.html",{'text':answer})
     #      else:
     #           print("The value is empty ")
     #           return render(request,"index.html")
     # P = joblib.load('finalized_model3.sav')
     # review="the product is good also"
     # lis=[]
     # lis.append("this product is  very good")
     # # lis.append(request.GET)
     # answer = P.predict(lis)
     # print(answer)
     # print("hello")
     # lis1=[]
     

    

    
    
     # print(request.GET)
     # data=(request.GET)
     # print("The data is")
     # forward=0
     # print(forward)
     # # print(data)
     # # move=(request.GET['forward'])
     # # print(move)
     # return render(request,"index.html",{'text':answer})

def ok(request):
     P = joblib.load('finalized_model3.sav')
     lis1=[]
     lis1.append(request.GET['comment'])
     answer1=P.predict(lis1)
     print(answer1)

     return render(request,"index.html",{'text':answer1})
