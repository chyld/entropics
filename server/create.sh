#!/bin/bash

rm data.db
sqlite3 data.db <create.sql
