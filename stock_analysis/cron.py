from django_cron import CronJobBase, Schedule
import sys
from basics.views import is_update_required
from pynse import *
from datetime import datetime, date
import csv
datapath='C:/Users/Nisha/Documents/pynse/'

nse=Nse(path=datapath)
# from  import bhavcopy
class MyCronJob(CronJobBase):
    RUN_EVERY_MINS = 100 

    schedule = Schedule(run_every_mins=RUN_EVERY_MINS)
    code = 'my_app.my_cron_job'    # a unique code

    def do(self):
        print(date.today())
        dateToday = date.today().strftime("%Y-%m-%d")
        datenew = dateToday.split('-')
        datesubs = date(int(datenew[0]),int(datenew[1]),int(datenew[2]))
        prices = nse.bhavcopy(dt.date(2020,9,27))
        print("k")

        prices.to_csv('prices.csv', index=False)
        print("prices")
        with open ('prices.csv', 'r') as f:
            reader = csv.reader(f)
            print('reader')
            for i, row in enumerate(reader):
                if(i==0):
                    pass
                if(prices.index[i-1][0]=='HDFCBANK' or prices.index[i-1][0]=='CASTROLIND' or prices.index[i-1][0]=='KOTAKBANK' or prices.index[i-1][0]=='HINDUNILVR'or prices.index[i-1][0]=='DMART'):

                    obj={
                        'stock_name' : prices.index[i-1][0],
                        'trading_date':str(date.today().strftime("%d-%b-%y")),
                        'closing_price':float(row[6])
                    }
                    print(obj)
                    is_update_required(obj)
            print(date.today().strftime("%d-%b-%Y"))
        

        print("cron executed")
            # pass    # do your thing here