package models

import "github.com/uadmin/uadmin"

type Contact struct {
	uadmin.Model
	BackgroundImage string `uadmin:"image"`
	Title           string
	Description     string
}

func (h *Contact) String() string {
	return h.Title
}
