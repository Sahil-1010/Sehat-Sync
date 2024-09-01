import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
df = pd.DataFrame(np.array(['Aspirin',50,100,
                            'Tylenol',30,60,
                            'Ibuprofen',25,75,
                            'Antibiotic X',10,40,
                            'Vitamin C',60,100,
                            'Cough Syrup',15,30,
                            'Insulin',20,50,
                            'Allergy Pills',40,80,
                            'Antihistamine Y',35,70,
                            'Pain Relief Cream',5,25]).reshape(10,3),columns = ['Medicine Name','Current Quantity','Maximum Quantity'])
df = df.astype({'Current Quantity':'int','Maximum Quantity':'int'})
df['Percentage'] = np.round((df['Current Quantity']/df['Maximum Quantity'])*100,2)

plt.figure(figsize=(18,5))
ax = sns.barplot(x=df['Medicine Name'],y=df['Percentage'],palette='bright',width=0.5)
for i in ax.containers:
    ax.bar_label(i,)

hospital = pd.DataFrame(np.array(['Greenwood Medical Center','123 Elm Street',100,'(555) 123-4567',
'Sunrise Hospital','456 Oak Avenue',200,'(555) 987-6543',
'Westside Clinic','789 Pine Road',50,'(555) 555-5555',
'Northview Hospital','101 Maple Drive',150,'(555) 222-3333',
'Riverdale Health Services','202 Birch Lane',75,'(555) 444-6666',
'Starlight Medical Facility','303 Cedar Street',120,'(555) 777-8888',
'Lakeside Hospital','404 Walnut Boulevard',90,'(555) 999-0000',
'Central City Hospital','505 Ash Street',250,'(555) 111-2222',
'Harmony Health Center','606 Spruce Way',60,'(555) 333-4444',
'Metro Health Clinic','707 Redwood Road',85,'(555) 555-6666',
'Greenwood Emergency Room','123 Elm Street',30,'(555) 888-9999',
'Sunrise Urgent Care','456 Oak Avenue',50,'(555) 333-4444',
'Westside Family Medicine','789 Pine Road',25,'(555) 666-7777',
'Northview Surgical Center','101 Maple Drive',75,'(555) 888-0000',
'Riverdale Pediatrics','202 Birch Lane',40,'(555) 111-3333',
'Starlight Rehabilitation Center','303 Cedar Street',80,'(555) 444-5555',
'Lakeside Specialty Clinic','404 Walnut Boulevard',45,'(555) 777-0000',
'Central City Outpatient Center','505 Ash Street',120,'(555) 222-5555',
'Harmony Wellness Center','606 Spruce Way',55,'(555) 999-4444',
'Metro Medical Group','707 Redwood Road',95,'(555) 222-7777)']).reshape(20,4),columns = ['Hospital','Address','Beds Available','Contact No'])
hosp = hospital.astype({'Beds Available':'int'})

city = input("Enter your city: ")
dh = pd.DataFrame(columns=['Hospital','Address','Beds Available','Contact No'])
ha = hosp['Address']
ba = hosp['Beds Available']
dh = pd.DataFrame(columns=['Hospital','Address','Beds Available','Contact No'])
dh1 = dh.astype({'Beds Available':'int'})
c = 0
for i in range(len(ha)):
    if city in ha[i] and ba[i]>50:
        temp = pd.DataFrame(data=np.array([hosp.iloc[i,0:4]]),columns=['Hospital','Address','Beds Available','Contact No'])
        temp1 = temp.astype({'Beds Available':'int'})
        dh1 = pd.concat([dh1,temp1],ignore_index=True)
dh1