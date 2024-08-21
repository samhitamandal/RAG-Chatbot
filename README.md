This is a deep learning and natural language(NLP) based prototype for a  Retrieval Augmented Generation Chatbot which can be integrated into any website to provide support related to HR policies, IT support, company events and other organizational matters to users.

Tech Stack used in this prototype:

Langchain

PyPdf

PyTorch

HuggingFace

FAISS Vector Database

In this prototype you can upload PDFs from your own system and ask the bot queries related to your uploaded document.Using LangChain PyPDF the document is loaded and split into chunks.Using Sentence Transformer Embeddings the document chunks are converted into embeddings(numeric representation of document chunk(s)) which is stores in the FAISS Vector Database.Vector Database is used over traditional database because it provides the function Maximal Marginal Relevance(MMR) which finds contextually relevant documents for response.We will use MMR over similarity search because it gives back contextually right documents while ensuring diversity.Using LangChain Conversational Retrieval Chain of type Refine, the relevant documents (found through MMR) are used to extract information to form a coherent answer.

To create an interface streamlit has been used for this prototype.You can run it on your system in a local host using streamlit by installing the requirements.txt and running the main.py file.Open Source LLM Falcon 7B from HuggingFace has been used in this prototype.










