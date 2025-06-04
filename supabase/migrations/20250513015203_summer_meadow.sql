/*
  # Create soil monitoring tables

  1. New Tables
    - `soil_readings`
      - `id` (uuid, primary key)
      - `location_id` (uuid, foreign key)
      - `moisture_level` (numeric)
      - `temperature` (numeric)
      - `timestamp` (timestamptz)
      - `created_at` (timestamptz)
    
    - `locations`
      - `id` (uuid, primary key)
      - `name` (text)
      - `latitude` (numeric)
      - `longitude` (numeric)
      - `created_at` (timestamptz)
      
    - `images`
      - `id` (uuid, primary key)
      - `location_id` (uuid, foreign key)
      - `url` (text)
      - `analysis` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create locations table
CREATE TABLE IF NOT EXISTS locations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  latitude numeric NOT NULL,
  longitude numeric NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create soil_readings table
CREATE TABLE IF NOT EXISTS soil_readings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  location_id uuid REFERENCES locations(id),
  moisture_level numeric NOT NULL,
  temperature numeric NOT NULL,
  timestamp timestamptz NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create images table
CREATE TABLE IF NOT EXISTS images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  location_id uuid REFERENCES locations(id),
  url text NOT NULL,
  analysis text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE soil_readings ENABLE ROW LEVEL SECURITY;
ALTER TABLE images ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can read all locations"
  ON locations
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can read all soil readings"
  ON soil_readings
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can read all images"
  ON images
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can insert images"
  ON images
  FOR INSERT
  TO authenticated
  WITH CHECK (true);