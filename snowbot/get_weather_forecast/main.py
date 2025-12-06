import functions_framework
import requests
import json

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
        data = resp.json()
        forecast_url = data['properties'].get("forecast")
        if not forecast_url:
            print(f"No forecast URL found for url {url}")
            return None
        forecast = requests.get(forecast_url, headers=headers)
        forecast.raise_for_status()
        fc = forecast.json()
        result = {"forecast": [{"when": pd["name"], "forecast": pd.get("detailedForecast","")} for pd in fc["properties"].get("periods")]}
        return json.dumps(result)
    except requests.exceptions.RequestException as e:
        return f"Error calling external API: {e}", 500




"""
gcloud functions deploy get_weather_forecast --runtime python311 --trigger-http --allow-unauthenticated --entry-point get_weather_forecast --region=us-central1
    """


