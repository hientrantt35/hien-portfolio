import functools
import http.server
import os

ROOT = "/Users/hientran/Desktop/Portfolio 2026"
PORT = int(os.environ.get("PORT", 4173))
handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=ROOT)
http.server.test(HandlerClass=handler, port=PORT)
