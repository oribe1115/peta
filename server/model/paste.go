package model

import (
	"errors"
	"fmt"

	"gorm.io/gorm"
)

func (d *DB) GetPaste(id int) (*Paste, error) {
	var paste Paste
	err := d.db.First(&paste, id).Error
	if err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, nil
		}

		return nil, fmt.Errorf("failed to get paste: %v", err)
	}

	return &paste, nil
}

func (d *DB) CreateDB(author string, title string, content string, language *string) (*Paste, error) {
	paste := Paste{
		Author:   author,
		Title:    title,
		Content:  content,
		Language: language,
	}

	err := d.db.Create(&paste).Error
	if err != nil {
		return nil, fmt.Errorf("failed to create paste: %v", err)
	}

	return &paste, nil
}
