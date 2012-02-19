dir = 'views/scripts/master'
Dir.mkdir(dir) unless File.exists?(dir)
files = Dir.glob('views/scripts/*.js');
files = files + Dir.glob('views/scripts/UI/*.js');
filesString = ''
files.each { |file| filesString = filesString + ' ' + file
}
exec ('cat ' + filesString + '> '+ dir + '/master.js')
