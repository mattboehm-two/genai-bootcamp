import functions_framework
import requests

@functions_framework.http
def get_weather_forecast(request):
    """
    HTTP Cloud Function that calls an external API.

    Args:
        lat: latitude
        lon: longitude
    Returns:
        The response from the external API, or an error message.
    """
    api_url = "https://jsonplaceholder.typicode.com/todos/1"  # Replace with your API endpoint

    try:
        headers = {
            "user-Agent": "Matt's Forecast Fetcher (matthew.boehm@afs.com)",
            "Accept": "application/geo+json"
        }
        url = f"https://api.weather.gov/points/{request.args.get('lat')},{request.args.get('lon')}"
        resp = requests.get(url, headers=headers)
        
        resp.raise_for_status()  # Raise an exception for bad status codes (4xx or 5xx)
        return resp.text
    except requests.exceptions.RequestException as e:
        return f"Error calling external API: {e}", 500




"""
gcloud functions deploy get_weather_forecast --runtime python311 --trigger-http --allow-unauthenticated --entry-point get_weather_forecast --region=us-central1
    """