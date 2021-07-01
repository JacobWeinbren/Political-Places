import git, os

"""
Gets root location for github directory
"""
def get_git_root():

        git_repo = git.Repo(os.getcwd(), search_parent_directories=True)
        git_root = git_repo.git.rev_parse("--show-toplevel")
        return git_root

root = get_git_root()
inputdir = root + "/input/"
outputdir = root + "/output/"