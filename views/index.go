package views

import (
	"net/http"

	"github.com/nabalmes/lukslofts2023/models"
	"github.com/uadmin/uadmin"
)

func Index(w http.ResponseWriter, r *http.Request) map[string]interface{} {
	context := map[string]interface{}{}
	Home := models.Home{}

	uadmin.Get(&Home, "id > 0")

	context["Home"] = Home
	context["Title"] = "Index | Lukslofts"
	return context
}
