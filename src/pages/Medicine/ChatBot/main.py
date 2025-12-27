from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from groq import Groq
import os
from dotenv import load_dotenv

load_dotenv()



client = Groq(
        api_key=os.environ.get("GROQ_API_KEY"),
    )

class chatRequest(BaseModel):
    message : str

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True
)

def get_bot_response(user_message: str):
    chat_completion = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": (
                    "You are a medical AI assistant. Be polite while answering."
                    "Generate image of medical related queries only when asked specifically."
                    "If user greets you with hi, hello or anyother way reply with - Hello, I am Turbo Techies's AI medical AI assistant. I can help with questions related to medicines, health, and medical conditions. How can I assist you today?"
                    "Do NOT use markdown for bold (**), italics (*) you can use numbers or bullets"
                    "You must ONLY answer questions related to medicine, health, "
                    "drugs, symptoms, diseases, or treatments. "
                    "If the question is NOT medical-related, reply with: "
                    "'I can only help with medical-related questions. For more info contact: +91 8104884493'"
                )
            },
            {
                "role": "user",
                "content": user_message
            }
        ],
        max_tokens=150,     
        temperature=0.3,      
        stream=False
    )

    return chat_completion.choices[0].message.content



@app.post("/chat")
async def chat(request:chatRequest):
    reply=get_bot_response(request.message)
    return {"reply":reply}
    