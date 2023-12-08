package model

import (
	"fmt"
	"log/slog"
	"os"
	"time"

	"github.com/go-sql-driver/mysql"
	"github.com/samber/lo"
	gormmysql "gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type DB struct {
	db *gorm.DB
}

func ConnectDB() (*DB, error) {
	jst, err := time.LoadLocation("Asia/Tokyo")
	if err != nil {
		return nil, fmt.Errorf("failed to get JST: %v", err)
	}

	c := mysql.NewConfig()

	c.User = readEnvs("NS_MARIADB_USER", "DB_USERNAME")
	c.Passwd = readEnvs("NS_MARIADB_PASSWORD", "DB_PASSWORD")

	hostname := readEnvs("NS_MARIADB_HOSTNAME", "DB_HOSTNAME")
	port := readEnvs("NS_MARIADB_PORT", "DB_PORT")
	c.Addr = fmt.Sprintf("%s:%s", hostname, port)

	c.DBName = readEnvs("NS_MARIADB_DATABASE", "DB_DATABASE")
	c.Net = "tcp"
	c.ParseTime = true
	c.Loc = jst

	db, err := gorm.Open(gormmysql.Open(c.FormatDSN()), &gorm.Config{})
	if err != nil {
		return nil, fmt.Errorf("failed to connect db: %v", err)
	}

	err = db.AutoMigrate(&Paste{})
	if err != nil {
		return nil, fmt.Errorf("failed to migrate: %v", err)
	}

	slog.Info("Success to migrate")

	return &DB{
		db: db,
	}, nil
}

func readEnvs(envName1, envName2 string) string {
	return lo.Ternary[string](os.Getenv(envName1) != "", os.Getenv(envName1), os.Getenv(envName2))
}
