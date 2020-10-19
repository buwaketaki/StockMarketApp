from django_cron import CronJobBase, Schedule
import sys
from basics.views import is_update_required
from pynse import *
from datetime import datetime, date, timedelta
import csv
datapath='/var/www/html'

nse=Nse(path=datapath)
# from  import bhavcopy
class MyCronJob(CronJobBase):
    RUN_EVERY_MINS = 3

    schedule = Schedule(run_every_mins=RUN_EVERY_MINS)
    code = 'my_app.my_cron_job'    # a unique code

    def do(self):
        print(datetime.now())
        dateToday = (date.today()-timedelta(days=0)).strftime("%Y-%m-%d")
        dateInDatabase= (date.today()-timedelta(days=0)).strftime("%d-%b-%y")
        datenew = dateToday.split('-')
        datesubs = date(int(datenew[0]),int(datenew[1]),int(datenew[2]))
        prices = nse.bhavcopy(dt.date(int(datenew[0]),int(datenew[1]),int(datenew[2])))
        print("k")

        prices.to_csv('prices.csv', index=False)
        print("prices")
        with open ('prices.csv', 'r') as f:
            reader = csv.reader(f)
            print('reader')
            for i, row in enumerate(reader):
                if(i==0):
                    pass
                if(prices.index[i-1][0]=='HDFCBANK' or prices.index[i-1][0]=='CDSL' or prices.index[i-1][0]=='INFY' or prices.index[i-1][0]=='ITC' or prices.index[i-1][0]=='ICICIPRU'  or prices.index[i-1][0]=='TCS' or  prices.index[i-1][0]=='HDFC' or prices.index[i-1][0]=='MARUTI' or  prices.index[i-1][0]=='SBILIFE' or prices.index[i-1][0]=='HDFCBANK' or  prices.index[i-1][0]=='SBICARD'  or prices.index[i-1][0]=='CASTROLIND' or prices.index[i-1][0]=='KOTAKBANK' or prices
.index[i-1][0]=='HINDUNILVR' or prices.index[i-1][0]=='DMART' or prices.index[i-1][0]=='COLPAL'):
                    print(prices.index[i-1][0])
                    print(dateInDatabase)
                    obj={
                        'stock_name' :str(prices.index[i-1][0]),
                        'trading_date':str(dateInDatabase),
                        'closing_price':float(row[6])
                    }

                    # print(obj)
                    is_update_required(obj)
        
        print("cron executed")
            # pass    # do your thing here
