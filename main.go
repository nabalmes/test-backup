package main

import (
	"net/http"

	"github.com/nabalmes/lukslofts2023/models"
	"github.com/nabalmes/lukslofts2023/views"
	"github.com/uadmin/uadmin"
)

func main() {
	RegisterHandlers()
	ServerStart()
}

func RegisterHandlers() {
	uadmin.Trail(uadmin.INFO, "Register Handlers")
	uadmin.Register(
		models.Home{},
		models.Standard{},
		models.Lofts{},
		models.Cafẽ{},
		models.Spa{},
		models.Activities{},
		models.Location{},
		models.Contact{},
		models.Location{},
		models.Career{},
	)
	http.HandleFunc("/", uadmin.Handler(views.LuksloftsHandler))
}

func ServerStart() {
	uadmin.Port = 1231
	uadmin.RootURL = "/admin/"
	uadmin.StartServer()
}
