from fastapi import FastAPI
import mysql.connector
from dotenv import load_dotenv
import os
import json
load_dotenv()

mydb = mysql.connector.connect(
  host=os.getenv("SQL_HOST"),
  user=os.getenv("SQL_USER"),
  password=os.getenv("SQL_PASS")
)

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/add-domain")
async def add(records):
    print(records)
    data = json.load(records)
    for i in data['data']:
        print(i)
        return {"message": "Hello World"}
