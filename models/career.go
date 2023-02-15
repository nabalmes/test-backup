package models

import "github.com/uadmin/uadmin"

type Career struct {
	uadmin.Model
	BackgroundImage string `uadmin:"image"`
	Title           string
	Description     string
}

func (h *Career) String() string {
	return h.Title
}
