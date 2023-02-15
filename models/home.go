package models

import "github.com/uadmin/uadmin"

type Home struct {
	uadmin.Model
	BackgroundImage string `uadmin:"image"`
	Title           string
	Description     string
	Subtitle        string
}

func (h *Home) String() string {
	return h.Title
}
