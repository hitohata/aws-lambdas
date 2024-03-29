from fastapi import FastAPI
from mangum import Mangum

app = FastAPI()

@app.get("/")
def read_root():
    return {
        "greeting": "Hello from Pyton with FastAPI!"
    }

handler = Mangum(app)