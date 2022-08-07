# a cool image for a dev
# is a tiny program
# ESaul11235 :)


def get_pi(x):
    # pi in 'x' iterations
    # @ESaul11235 :)
    pi=0
    for n in range(x):
        #Leibniz series
        pi+=4*(-1)**n/(2*n+1)
    return pi


print(get_pi(1000))


