from transformers import pipeline

summarizer = None


def get_summarizer():
    global summarizer

    if summarizer is None:
        print("Loading AI summarization model...")

        summarizer = pipeline(
            "summarization",
            model="sshleifer/distilbart-cnn-12-6"
        )

    return summarizer


def summarize_text(text):

    if not text:
        return "No abstract available."

    model = get_summarizer()

    # Prevent errors on very long abstracts
    text = text[:1500]

    result = model(
        text,
        max_length=120,
        min_length=40,
        do_sample=False
    )

    return result[0]["summary_text"]