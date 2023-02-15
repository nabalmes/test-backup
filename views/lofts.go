package views

import "net/http"

func Lofts(w http.ResponseWriter, r *http.Request) map[string]interface{} {
	context := map[string]interface{}{}

	context["Title"] = "Lofts | Lukslofts"
	return context
}
