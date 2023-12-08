package model

import (
	"time"
)

type Paste struct {
	ID        int `gorm:"primaryKey;autoIncrement"`
	Author    string
	Title     string `gorm:"type:TEXT"`
	Content   string `gorm:"type:MEDIUMTEXT"`
	Language  *string
	CreatedAt time.Time
}
