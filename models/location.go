package models

import "github.com/uadmin/uadmin"

type Location struct {
	uadmin.Model
	BackgroundImage string `uadmin:"image"`
	Title           string
	Description     string
}

func (h *Location) String() string {
	return h.Title
}
