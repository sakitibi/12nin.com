window.onload = function(){
  var iframes = document.getElementsByClassName('juunininadmanager');
  var r = Math.floor(Math.random() * urls.length);
  var urls = [
      'https://sin.creativecdn.com/imp-delivery?tk=MpFvCkohMur4sN-gR7jJg5YHgLMwPpOOJtzU10lbi09qkYbF6jQv-pX_OjhujmetdkzLOa8pV2KrftZjX7K_-u6e56cn7N-LfviDDVTrAqpy4DViLqRqlNiVrXtzGgN0IdXsneybht0gSR4dgN8EHNloreEclH1OEQTrwZxfmfE8DRdF5SuCocwcEFaCsxZK8vqoD9az2nkgEBsRL5ZqVaaOk5jjXsQQVVLYmMsrzaFYlNiLZM4UySVutBkJRQZuVO-ORxjlWW7cdquC4BnerOcGFpVlzr305ZBflSwoBvUhz5aQuIsxnQh_u1MWjXQTtjiB0Ho281JDKUbvQUG9c-Nn-GEiLxIfq7NyU6IHacjg5TcqyxW9APYkaesi8FnuOdZL7a4Tq_ltCETyH68RaA&curl=https%3A%2F%2Ftg.socdm.com%2Frd%2Fv1%2Fz%2FhKFj2gD_Y2hzbT0yMzgsYzJmMmRmMTcvMTYyMjI2L1NTUExPQy8xMzQ4NjAyLzI5MDQ4Ny4yOTUyMjUuMTM0ODYwMi8yMjc0Mjk2LzE3MzM4Mi8xNjIyMjY6U1NQTE9DOiovY3Q9MTc0Mzk4MTE0MzIyMztzcj1odHRwcztkc3BpZD00MTtwcj15eFZQejVtMFNyOEstTGFPUVFsQ0NSd0w7cHJiPXlRO3Bybz15UTtwcm9jPUpQWTtjcmQyeT0xNDkuNTIwMDAwMDAwMDAwMDE7Y3J5MmQ9MC4wMDY2ODgwNjg0ODU4MjEyOTM5O2RzcGlkPTQxO2Z0eXBlPTE7aWR4PTA7pXNlcWlk2gAkMTk3NDJhYzgtOTA4ZC1hYzBiLWIzNzgtOTE1MDMxMjI0MDE0p3NlcXRpbWWtMTc0Mzk4MTE0MzIyM6R4dWlkuFoxWVJhOENvOFlBQUFHNlFCdzRBQUFBQQ%2Fp%2Fctsv%3Da-ad40305%3Bseqid%3D19742ac8-908d-ac0b-b378-915031224014%3Bseqctx%3Dgat3by5hZy5mdHlwZaEx%3B%2Fg%2FU%3A%3Furl%3Dhttps%253A%252F%252Fsin.creativecdn.com%252Fclicks%253Fid%253D20250406_z0ja2e9GoKnNISvBECcN%2526%257BEXTRA_CLICK_PARAMS%257D&tdc=sin',
      'https://ads.as.criteo.com/delivery/r/afr.php?u=%7CebRtXdla6rqV7jKlguVBj04zki0jfcjudUaBXaMWmYY%3D%7C&c1=Dcz_gsP0hEuJH1VnunqGy1Gv4jg2UtNuZh6rIexvwbPdnT_XaVBcsU03qj3WbcJ2oD-MMQfu1V5kn3g-XtdDbI_A-puzn0zM8ZoG_WJz8XoJKcL1yycTOFlXOPIP7BQRnVP9UnsUfdUzX4JEsP9Q08VbHA8PwlQzoXlTzcTKgi1UmOVlYjv_xi0Kzztef-cFNUGFW0NyiXPw8PAh6v8pZd9_YnNjoFI-eFzGZbfadKZhghadHctbEPILc7xIm29SNAmDmqnVbMCcfpyvsfBbfUeHntFdPI5F6rUMnAQ1OFpvx8i6kMKojfNTN6k86C8QbL3ZXGaGA5eDW5bQAKx8WNQtG9SuvFdZTjqobKcMky_me_oFNHw-dvQc_FIvmB2ybbv_V1EMvTPh9dKaMmbPyqFmdXXDHpRK7k8Q7ifrrqE57Hg_AdtDeNKOOQ01DlOqBfYiFtDDhDtS6MD7CHIl7eO6A6jNG1dqf0UW7SDOrzx0N6G8_C6pLtkMT3CIiO2r_sJfTgU8BZ659e3Ifre5NYjGRtG7M7rEDVHU96st_dAa93MR_dSrrHszKg6WbQMYYFhCUtRF9R1puk1yr5xd4D5Y9dXhYF9uGmJ8u1O9AYopERtLC-mE99W3ZHcjYsZ8o8YJv3k9FANOQLtp9iZnP5rUopxk6KSmd_GXuTXaJg2HZXKj7-uCzw1JSXbftVzDkf1hD5y03ofI0d1MA5yYdw',
      'https://sin.creativecdn.com/imp-delivery?tk=_AwA9klxhQy9EFfZg0rQFluEwBjt7FEoC_MaWMJ6qjd5eW-NaA61WCjoJP91Mi0Zg4eR3W6m4SGzm4oKjXNSnkbuhBIcPPuSd061xJWxXCcmI8-2oV8DF4Fm8vhMIO-jJonAy2fvZ_8L52FecVrWxPj_8fwM5_gqDpohhxSANnoIGssI81xDMS_EOvpEZAWpTP7ARI9n_zTrAjgxV32UL1IgQGffWEH29RfpFMA1SJ3QmZ8GU7QwxDoRvtJKxt2OiPeDvDxWHuYc4bEF_kUn5f5XkqL3QK2DuvwVqyqKfDwiZZOfs1IewfERl5hdeVh-sIi38R5VYTmZsqNluY-u-vJUz4EhZiAlXLoE5rdU4MA&curl=https://adclick.g.doubleclick.net/aclk%3Fsa%3DL%26ai%3DCxjpUCRjzZ5m1Asi_vcAPl56h4Q_A8b7GbfW6gY24DsCNtwEQASAAYImj0oSoFIIBF2NhLXB1Yi0zNzA5NTY1OTY4MzY3ODc1yAEJqQLiqn0APDs9PuACAKgDAcgDAqoE-QFP0ARuhvNNibsMn86XGzXS5RooveZJdlF-Q_WJ8pxCiGRMgg9c3Zx13Fc-j4Fnb-FgDLQL3OhIK9VqHODxAa08TbmAeqtlcIsz3faox7b4gcpy0DgKtqzyT4uhbhjT5-7KnrE32UoAyuvuUGCZJK7OATqVo2mNiar49_V8HrgHgdJNRzGHMm2JuUL578gWCzj-dXpSkzJAIdDGTT85sLVXfkfVMR5eHZKysV2k5RYuliBCN62Z9lhfJrew6jWL5bE__vyB75-72eiPDyl3nbEuII-96YQaDULeJOi8EUtLNZlPwFZ-EkhSgxh82uityiGRbC_vOdls0ITgBAGABqqEkvTCuP2ijAGgBiGoB6a-G6gHltgbqAeqm7ECqAf_nrECqAffn7ECqAetvrEC2AcA0gglCIBhEAEyAooCOgyAQIDAgICAoKiAAiBIvf3BOljo3v2L0cSMA_oLAggBgAwB4g0TCK2i_ovRxIwDFchfDwIdF08o_OoNEwjypv-L0cSMAxXIXw8CHRdPKPzQFQGAFwGyFw4YDCoKNzE1MTc0MTExMA%26num%3D1%26sig%3DAOD64_1nKYpLsUHIfIPPPETGsUqlwxSY5g%26client%3Dca-pub-3709565968367875%26adurl%3Dhttps%253A%252F%252Fsin.creativecdn.com%252Fclicks%253Fid%253D20250407_eQ9QERVdcVJQ89BaNEcx%2526%257BEXTRA_CLICK_PARAMS%257D&tdc=sin',
      'https://sin.creativecdn.com/imp-delivery?tk=6mpliGU9eN2YdFBr8QOT4eD1A87gZMpelss0cd1AyKqg8SGL_wK8q6I6GkQf9MppVlKHmAf_dMAbjyNIHRdvMrDbhm_AfMl4LSCkQ0arrJNlPDebrMNiAJqUkcqcxNrvFnoUT8lg_J71M91dtAmN95KD4LwNBVkCJYsL0HTtEli5tm5bXv1-ZguYnKlffxm_lEJF2LlsOIIrORT98pLmHsH8FrOqxsylhxE9xmUBaN-Sf9pZuDkCgoCegSFTEroNVboe5nrvYcTfMNMYNKQGHGCHL3tpeLDRUts69Ithd88x-zDRMfimDgaoaLeHF7gMRDLPqgfmfHtaV3-Xbk9Z8ZOPoQ00BsGmHix-9R99s3R-qpQndr68xDbHt0ncuMBXpUAfYqkoL2l4xmdsgJLr8A&curl=https%3A%2F%2Fsin.creativecdn.com%2Fclicks%3Fid%3D20250407_NzrKnV0RihlsUISpDmMA%26%7BEXTRA_CLICK_PARAMS%7D&tdc=sin',
      'https://sin.creativecdn.com/imp-delivery?tk=CLOvbBbiF8mBpsmfqBa3i-vywLAHy0wJQxIhXeZ6VnSDmU5dwXFAL4l7VGapQxdn5ADYw0HPgh8M0r-A_dzvvwMQQB1RRi3buwxLYg3Ial5pyJaXEIa5Okat1Ms-vQ1-ZTuHijSghZTd6rIhRYH_YK-1gnpyhWTvv07HSGSAXZFk6IUZiejNR2B_4uSFWxBYcSSsJ_q33NXIKLrGu8lBOMrdBjGuRZiY5Aos16Ccxki_4R393Q8DSWq8_tiuSQNBznTIHXuYsuhAL-9fh76nIrSam_BIBmlO-DLcP20UQ0CnG9fBIUotyyeRsmBqb-cguG6oZFmgCG256GH1H2HKMDdgnuQCiLkcHUqY6XEk78UIeApoakq7O3a-5syAjs4X8OPnsZ3HLUSa6GbVT_Eieg&curl=https%3A%2F%2Ftg.socdm.com%2Frd%2Fv1%2Fz%2FhKFj2gDxY2hzbT0yMjQsNGE4MmI2MjcvMjAwNTAzL1NTUExPQy8xNjE2Mjc1LzM0ODQyNi4zNTMxNjQuMTYxNjI3NS8yNDUyMTE4LzIxMTE3MC8yMDA1MDM6U1NQTE9DOiovY3Q9MTc0Mzk4NTQ1MTQ4MTtzcj1odHRwcztkc3BpZD00MTtwcj15TTJIWjUtbHdRO3ByYj15UTtwcm89eVE7cHJvYz1KUFk7Y3JkMnk9MTQ5LjUyMDAwMDAwMDAwMDAxO2NyeTJkPTAuMDA2Njg4MDY4NDg1ODIxMjkzOTtkc3BpZD00MTtmdHlwZT0xO2lkeD0wO6VzZXFpZNoAJDk4M2ZhNWZiLTAzMTYtNjQyMS1lOTdhLTlhNDQ3OGQ0NWZhMKdzZXF0aW1lrTE3NDM5ODU0NTE0ODGkeHVpZLhaMVlSYThDbzhZQUFBRzZRQnc0QUFBQUE%2Fp%2Fctsv%3Da-ad40295%3Bseqid%3D983fa5fb-0316-6421-e97a-9a4478d45fa0%3Bseqctx%3Dgat3by5hZy5mdHlwZaEx%3B%2Fg%2FU%3A%3Furl%3Dhttps%253A%252F%252Fsin.creativecdn.com%252Fclicks%253Fid%253D20250407_r15DNqAwVgOa5HmkJPZ6%2526%257BEXTRA_CLICK_PARAMS%257D&tdc=sin',
      'https://sin.creativecdn.com/imp-delivery?tk=teOvHI6riZh6ZIlDyIQ7MZuTx5sDkuF8b8Zik58IV2xOVqxkzbxVbA8ukgw8lDm4I3gZV3FTkpRhOnyv3PwbiPJBdrkikuLl_RDRvpH3NjXw37gRo_LRjhQDQ4tXp4qEMZIbuK74Xh3e2Z_w8hej1gDeKNZD3cZmYagRl2tDY8IgBqwozm-T7dOMq_l1NfRFVv_FtiXvQcvFxo43vSNbaBRsbO8OAxm8eaTls6OhqjrnFRcaQhUZxYh4KupAGciNjwSx97iuvOfnHNSxIsxZFSMt_0SbW7OxwQtd1M6SshrhYYJdJ5m66-v4_9Xe21v2cOqVQ7RCxRveDqyTZ_BpSiP2CXGGPDDpx9m9TBJzN4D5J53bBFySrzI2rJlqm3zfN-D68xLgVTTQbgqldyPlVA&curl=https%3A%2F%2Fsin.creativecdn.com%2Fclicks%3Fid%3D20250407_Ty9jht1tHIc0YMG5rKg4%26%7BEXTRA_CLICK_PARAMS%7D&tdc=sin',
      'https://sin.creativecdn.com/imp-delivery?tk=0ieyOL1A2K874i0AL6SM-W11d1klaHH5PIHpSgvlmsKVAOf0wuvCks7PN0s8ag6sR4jvRgcirX5mP50K-YWc1vEzIOSZrW5SjOMRmlqWmNU2orje_tJ8GFPUJzCLG83u5qqL6gxq0hCFsba7n3w_uflLGuJgbbfDX2gFOFzRn6bI962v9iqqoFyxyYjYOoUkrzRFF8M3gQfj59RtUXTqxoW3IDoJGO94iqS4Mv2_N48iZjUF2T9ki6OmAo2zXRQ9n_o3dN4Wp3bX8HoLpr2HwHoopYwUAiiGKe1Ic6wypv4mLD9nq8mOJzldU0dbg_eFpDQJhbHn_GHCs7wxjifrrAhvdtvhybt1lnVpvsAWxOlJl18PuMIui3jMfJ1um50c2ZDLVfuShkVFJ9bFeg4OxhYAax7RBpKsNeftQznXmqTmdlHbzAxpAWyCpOQoY1N8&curl=https%3A%2F%2Fsin.creativecdn.com%2Fclicks%3Fid%3D20250407_T7A8G1iupuI8VtpsI2tG%26%7BEXTRA_CLICK_PARAMS%7D&tdc=sin',
      'https://sin.creativecdn.com/imp-delivery?tk=7hpuNBYSgcCBRkuWDdZB_mv_J3FsvhRyXodpy7SFFstZv5UjRotRXJvyn0i_9xR3c-eP-mCaOAYD32ACjLRI8TqPiqAGpTW8yPSrgcZ_z0oqdnLQgBOecgypg1djMuSiFSPa7zYBs_aSBtgYiSxooMG_EbyWO_BuIuhgXbkghbOw5QMUI488pIwSuvyeTzt3qkDvxhWFTbPr3Ui8ehq6gA6OlWaN3Lu58uPGJv8BUo3_Zjl4KV-bGnhd8EvP71_gDtDkwiWqpNkD4SDGqha0eDyoSCLKU2L4sO1x7nzyVFzlPeKH9dZnlGf9zIzzaXM6T-DIrGE3rjqIyf5ALGWezmmNICwgSOC8dfSSQBOmv2VAlHmmoJisgVVBke3zMu9xk0U00d2KNhoyzMzNLbrk9P965IBCUGzEdx7xNduOrro&curl=https%3A%2F%2Fsin.creativecdn.com%2Fclicks%3Fid%3D20250407_sowBvGFzrdx0NUz7YToq%26%7BEXTRA_CLICK_PARAMS%7D&tdc=sin',
      'https://sin.creativecdn.com/imp-delivery?tk=aT0Pf367dsaIR7ZjtQ1ygmpOc89Wxu2jbeC7SDEFUkpyErcnGjjdpAyGEY_iG3ozTViASvsJrpruxJJc2SyBRMEwIAR3cWOocTaPo3N5vKaTx-i-c8f5SCWU9j5O-2it0LHBJJ5O3iYN6b0trG_Mwx2Xr4mvDowCcpyzTNYR2JYXFUyCMYqmXpOt1H-WfCzsLo976t8aY6H1mSs4vo5e4Me7AHuVIw8YsbT9y7kYfv8wfajZe-5k8pQwKqzfSlkmO8VtUuw0eFH_52WrhyZWIYULHd39f-4wweLIEZjeD0FOLEcSGrOVAHsPqH0xPP5eixSCccp0jXERO_653pBy_gbgO00L6mBj9QMY3xEmkgvSppwAaACHs_-5GngeZzmR&curl=https://adclick.g.doubleclick.net/aclk%3Fsa%3DL%26ai%3DCsS5hKTXzZ9iADeKIid4PnKaikQXA8b7GbfW6gY24DsCNtwEQASAAYInz0YSkFIIBF2NhLXB1Yi0zNzA5NTY1OTY4MzY3ODc1yAEJqQLiqn0APDs9PuACAKgDAcgDAqoEhAJP0JUk_hldT2eX9fpWVSH-2k_XDWq-v_6jdcvLB3o8U6_ezLKXJVEMP2utAdCuYVNuVs4ZyOQSGOtljxclanmqmE51m5050oO18nSVWnlo7o9TV0QB2yc_LdQAViXMWP0ce-43x9nHoZbeB_m4RV1DuTjeYy5uWDf6xNLPsUoWbyEZ27bu0HXBMp_wlz7RDoRMTNff-sszf-F4mWDQVL_npSF76ccOw_P6wVMCVSo-eMpLxXe4s4Q-2QdqxK7p4pMjOWtTh52BCSOmmEtdg07umVFgSCEtMfj0rDB2ICZQS9Z67I4-tYF2CxryuQS39b5VQno-KNDbaQU9_Kcm7h8ix7yPzuAEAYAGqoSS9MK4_aKMAaAGIagHpr4bqAeW2BuoB6qbsQKoB_-esQKoB9-fsQKoB62-sQLYBwDSCCUIgGEQATICigI6DIBAgMCAgICgqIACIEi9_cE6WPzEru_sxIwD-gsCCAGADAHiDRMIzPOu7-zEjAMVYkTCBR0ckyhS6g0TCOuNsO_sxIwDFWJEwgUdHJMoUtAVAYAXAbIXDhgMKgo3MTUxNzQxMTEw%26num%3D1%26sig%3DAOD64_2NchQ2Z4pPguN5MqeOTP1KHFqYLA%26client%3Dca-pub-3709565968367875%26adurl%3Dhttps%253A%252F%252Fsin.creativecdn.com%252Fclicks%253Fid%253D20250407_2JrAbFv5EVG5Ew3rek06%2526%257BEXTRA_CLICK_PARAMS%257D&tdc=sin',
      'https://sin.creativecdn.com/imp-delivery?tk=_8t5ZWXWHtJTnxrxgi6kH0MQRTQUa0BSGydiRSUvz6Es8kd-7RQeAHZTiRGWm8le_ZTQ_jvp2pSr34aoj0HztvEvm_7O4DMws3NiYEDd-y-NvJeIChApB3uFDHr_ByH2RXR8_L6qq5TXQm7eRpLHbTei1bjVIbVFqeVRgsPaDpnXFrQtpWVRhWIiDqEi63BvqRF-frFyv1lzW8KpxNXMnbs9wf35T5S-fP5UI6kG-hpqxfnboIwHmHZjjvgneP6z9o5iHhGrs9Ccf-MC1-te-kjgHfMQAs9nX4EQtmjR0snQ8n0SiMdt2GV_22MuzFro2np0bag2Oj-uIiva7GnL9fYtbbAdrqJSXHyiSH6b6Hl8Y3NUeby39G8jgeiys_s1exTBfzTqAQ5ScTjtPM0BFEb1ewc3XgQ0HVU3YD7XQNt3Mktro5h7JyX6aRwmv0lX&curl=https://adclick.g.doubleclick.net/aclk%3Fsa%3DL%26ai%3DC1Uo27zXzZ8WxGeqO29gPmMjDqAzA8b7GbfW6gY24DsCNtwEQASAAYImj0oSoFIIBF2NhLXB1Yi04OTg5NjQ1OTE1MzEyOTIzyAEJqQLiqn0APDs9PuACAKgDAcgDAqoE1gJP0KDHN7Z72_ng7nlUdIxJ8RH9hM64JvFPodZxNa_DBbMDxsbpZvCRAfNojY7iIASX2yRC27Ec7z_FdUO-tsE7Xru2k3Iexl4UYoUOsOm3c3yAYQT04xGL6_6jEWVfD8Tag4ujBwvCEt51HRdh7h4mJcJN08wnYS8_PLp23olOS_jRy2V-BegsSRd5dYbn2y2-F1e2BpBYPnZlMifSqBRIwLFV_2hPCtFaBvLVVtAbcdgPp9WvLqPjcoKBPd1FdpsiUwig_5iwYDaX0suOi3u7RW3_N5lv0yPTzjC1R0pbcEyu64SYMOg-9VlyUphyNCKceMW3gE0A68I7X_hvLq6LPL49YQB6Cs319WwxbrVskYROhk4sk693vZW9UljPask-ldy5AjBSTjBB71W6_sOJz2xbA7nlSUoDdArgG23bvAieo5y98PpDoszLI_NsmAV46pC1jnrgBAGABqqEkvTCuP2ijAGgBiGoB6a-G6gHltgbqAeqm7ECqAf_nrECqAffn7ECqAetvrEC2AcA0gglCIBhEAEyAooCOgyAQIDAgICAoKiAAiBIvf3BOljtvO_N7cSMA_oLAggBgAwB4g0TCMf7783txIwDFWrHFgUdGOQQxeoNEwj1svHN7cSMAxVqxxYFHRjkEMXQFQGAFwGyFw4YDCoKOTE1NTUxOTMwMw%26num%3D1%26sig%3DAOD64_05aEJMRw7TDhutW8aTM_0K8NH-8A%26client%3Dca-pub-8989645915312923%26adurl%3Dhttps%253A%252F%252Fsin.creativecdn.com%252Fclicks%253Fid%253D20250407_zm3RTP39CYxwFas3gnQe%2526%257BEXTRA_CLICK_PARAMS%257D&tdc=sin',
      'https://sin.creativecdn.com/imp-delivery?tk=IN9Eo7HpjJddbsvlAeIPG3gCwVg3WX3HZPZOj2OTKIIsMC8E3AAYwClw-Uk8wiFipjhYRyMzvoAsJxOggF5Z5IxYZ3QZCsxMBxOKe7CQdzrdZRT8UKO7eorOmrU0WYrxKKlv3iVgtRC5s0KszZg9tSKwkWMd70UtJCwZZkqvsiUXYfENfDvV1WQy4vTE3k2_h7oCwsEn8-kIXEIuV00ee5Rdgh-HqwiwyaCFhzSOT3RgUClSqoirtAPmSoA-rwomBvI8SaWh1nBjM4dFY6CWz_wR00fJ1rIU7QXnh8xY_9MPwe2gLTEd56frHjGJn50FD-7NkFAv1W5g7IIMVwdYs4JmbCuMGxhjfA_YZKxJXtMpg4N6-Y3g-5k8yAGGW3vmE92P4ZD0wxHR4Pk6zpsRyyRZzyUQYzMi7-H2tTSMSnu1Q_oqMgKx9X0YuCX2WEuM&curl=https://adclick.g.doubleclick.net/aclk%3Fsa%3DL%26ai%3DCgEV07zXzZ8SxGeqO29gPmMjDqAzA8b7GbfW6gY24DsCNtwEQASAAYImj0oSoFIIBF2NhLXB1Yi04OTg5NjQ1OTE1MzEyOTIzyAEJqQLiqn0APDs9PuACAKgDAcgDAqoE1QJP0NKQW2IgIP_qpAc0nA-bHze-Issf1WnR4IeZlINNT5ELLTtYOzw6FhY67V_MaudUAAWGvFQkYoTY1IdFYe9T-shnsyrtfFKXYlcuQ86tXxXNvHfE_6xUhp1mMSWtP2B4f3fFjR_Tc4L0wiVvYmG1hMvWlI1P-NYT9pncWy7EXgUHehIIlvtmqYdLLSS-KfeY-n3iEpQzxYysTdbmblHgRuHFqSekBs0MNgS4J691-yY3I7nKcvScFMaKekVbSFWRra2JPru9k9TjXk5McxtRu522GKtlPW-S12MYALxDAmq6qjeeslf3RltAOEKlRMzEp8AMvCeQqVbtx3sXRRu6BXsXtxhgVFOR2zy5e9CIiRv2wU2mgrYNUasmdpUJE2E40PVvxylbQHoGOoBTGQ5w-3zDYQJjid1mLk2KRzrkxtnyd0vQPvyjL4h1i4neqbXIzjhjjuAEAYAGqoSS9MK4_aKMAaAGIagHpr4bqAeW2BuoB6qbsQKoB_-esQKoB9-fsQKoB62-sQLYBwDSCCUIgGEQATICigI6DIBAgMCAgICgqIACIEi9_cE6WO28783txIwD-gsCCAGADAHiDRMIxvvvze3EjAMVascWBR0Y5BDF6g0TCPSy8c3txIwDFWrHFgUdGOQQxdAVAYAXAbIXDhgMKgo5NzYyNjI2NjA1%26num%3D1%26sig%3DAOD64_2mfNYfIoG80KHUaLqUXRLPTdi7qg%26client%3Dca-pub-8989645915312923%26adurl%3Dhttps%253A%252F%252Fsin.creativecdn.com%252Fclicks%253Fid%253D20250407_bACP9xyrvR0GwITPhZJQ%2526%257BEXTRA_CLICK_PARAMS%257D&tdc=sin',
      'https://sakitibi.github.io/12nin.com/SuperNewRoles-Logo',
      'https://sin.creativecdn.com/imp-delivery?tk=LwV6JWP43eyiMJSyGvEQC2uiPk-eeOi3La9ohtXgonsgUYwRatF9h-0-OnhKm0oG-lO9oFuISn2gDxefgZMwxUX-Y5foJK1zRxzCHdUWGGY2y062QCDnTJ-Kotp4n5db-r9NhKvJZMKjQTH3m4eGGrlZE6qR1Y2VVm9Jzc1ruWZKmm3gj6yaK1grVFeCvESy0r1As8EAnASiHOK80yMeHEQH380JxfRdsisMRbUwDA4oMXYYLTpcbs0VNcT-rWaBcYaABPJ55lzd0BiyqKjZKBFdNuV8mQ4dqCTQjbxvT934QRN2mkhDrJT5U7UdR4OZGPMgxRtYGdCPHvxVeLTaJtVrRuogG__Dll_eA9yggjZqHmOCwlMrJSzcR3A4dv5F7v4jEwTMYshC5Tn-7JGt3_1WxZjs3xHflYfii6abkeRXYqD0vyjMvYDUDOmGWOOX&curl=https%3A%2F%2Fsin.creativecdn.com%2Fclicks%3Fid%3D20250407_fWirbCEfJLLVSwwJpJFR%26%7BEXTRA_CLICK_PARAMS%7D&tdc=sin',
      'https://sin.creativecdn.com/imp-delivery?tk=RbMNTOLWkSeLO-25oZ5wufrA7ynldsBzv1yF74QOFzOO1DaRwGgpJHY4Sg_vVQDuwasd5UoVS-Cu8LFYud97HBAPjejDgk3KKsssUqRehqWCf60Ghgr6aOUDycbzdb-S4PtXc3vlwEH_coYL5KPfyWAjPcM0uhZZKKd59sGkoM3i6k3CFRJ_MPiDRi7ne8dfXI1H6rAwvNKZG0A-Q4JpNHCe5fPyX5BREDityKuy9M17WXo7kfXTlz1Z6JsNbWSzF8ysJbwWv11aJS-ZZVo7-RZi3-Kx10s6LIkrizyIBXEE-DNPlyHAuurZvzleArm4bJ-CKzKgKrUIxHgCAlAE8NZCvEat3hocC9njCnjsJn8lrM6xoDuK3v8FgpFSWK4h&curl=https%3A%2F%2Fsin.creativecdn.com%2Fclicks%3Fid%3D20250408_DZtDfusmU1JJAatutR9j%26%7BEXTRA_CLICK_PARAMS%7D&tdc=sin',
      'https://ads.as.criteo.com/delivery/r/afr.php?z=Z_UcgwAFCf8F6ZXwAB4t6YL253odqr-gxd6Eow&u=%7CUl%2FmvhRN%2FBfX9tup5HBE%2FbQh55oxuwomlqPldFqDH6Y%3D%7C&c1=s9Ouqadr9PM4zXBXTeqvxkf9GF8K53uauz9IFN-oZDOWtrZWd_ZxsU0FL_wG-N6zly48pbHepEm51DPJT5JkhaGy92JskR2FqZgGIymYgz_JZYDC9CdDQG_oKf_tS3YViElGESlr9H2A573mZxMpNCMHTYxw_YHzk2rbVpdHOCqTUMbZOuTUy06_N3HbFNDrrDflwhZw9tHi31n8VJXLTkvqFTOBMOIKabGBrJLSOgTAdlDQ0nNeEP7bMCIugPFnSywzY5uv4y5hN_aSTpp319ydgfOV8g1wBUKkrG1RHJzJbGsY6gn_k3QtV-7AlD3-8pzIDDwneqDmq1FGcXggmSpPftEXjU8d2cizjMkRO-2WUm_tCdB0TTlphT0h_c2xkO4loNkvbqs9-aUX1MOWKU12_QnVWXcGcXEg9S6AeOsT1Tmn-oMdR9pNdZ5K2-xIDZ4zlFthasia7uEfb4xACkN5I1oZbuSz7pKE5T7jiCGSBjS08BALgm5vNVuN6W_4T4yFglj0tNAOJiqC9W33p6EZ3WW4_KA_7eNK6X8XAvFf3D18dTcrvfUkUbuTjK4zNSUWH9kzohwoE1o0BV-ccLFY6gqZ-ASFRzRDAoz-PjxymkqkAM18jZNvlw8wb_aVDPOuGGd92fTjouZ56sCHZKUTVddUTIrnhNYDi1kbpY-_RZiCPCfyUryDCJQJeAZaI1Rk8S_nA1bQ7aV9LYuYcGJRmw866HX1D3x70ekIk5Ftsm5sKrXoWHgZgpbgCv224_EoaK5F6k-g9t8jHUzq8OgYKIGXv0KfP7MV62R-D0CSPYaHHiILFi9e20XOyD-7q77VrXPW0TKk-XqeeQrvfLLbeBn0v4EY&ct0=https://adclick.g.doubleclick.net/aclk%3Fsa%3DL%26ai%3DCtGLhgxz1Z_-TFPCrpt8P6dv4yALRvr7bdayNn9y8DcCNtwEQASAAYImj0oSoFIIBF2NhLXB1Yi0zNzA5NTY1OTY4MzY3ODc1yAEJqQLWDtU-miE9PuACAKgDAcgDAqoEuwJP0JDFL6tGYnKEk6qS_tceMjQfUq_DDcsiiquLgGpLUQoX52QF7lCJ1Nwj7ibHdz6i7fgj-6JosTrb180htjFtXGN6tcafLp8_s51hmQuMzilZC9Y8grZitlbsBjwHBhh6-nK59HVkA28M0WLD2b21AF59dkQRLh8FsfBu2eb6mrEhcGK-aGD6RPKwNG0HBSuJfdPhXn9s86OTkGYyz1h8sYhovHwblpjxXysVaYoJVVicOVCLXAoABFIDZ-VIBkC2DjMts48ldwDvE6wso7JxqaDbSjs2dc4dnxZJaWrPvw80udOcF22RNPIO25dCfNuzOTWcS-Jfr2wWgVPnGwlCeSztVhNpUPcYdV111eOoMxYwBEKFfpdHLh5Mkiy78hDGmeTlWju7I3CMPO9jE_lhOdURkc8EWOcUkAHgBAGABqW-tcGYxc7msQGgBiGoB6a-G6gHltgbqAeqm7ECqAf_nrECqAffn7ECqAetvrEC2AcA0gglCIBhEAEyAooCOgyAQIDAgICAoKiAAiBIvf3BOljqxcnSvciMA_oLAggBgAwB4g0TCOL1ydK9yIwDFfCV6QUd6S0eKeoNEwi9pcvSvciMAxXwlekFHektHinQFQGAFwGyFw4YDCoKNzE1MTc0MTExMA%26num%3D1%26sig%3DAOD64_3TkoAM1avEh3AhHHU7yhwuxBd-gg%26client%3Dca-pub-3709565968367875%26adurl%3D',
      'https://sin.creativecdn.com/imp-delivery?tk=nLu_GbaxYSGRa-i8olibj7TbqKa0vRs1eLcufVzxlDAjfzp9TzcAt_zl2BI0tr5Jg27dhJ2JQRN70on9UkeGZiad7MygIlaSV10nd20ku_29-vtc-KDoG0AUfuoPQMrQ9JOeboBIXUbV2zqTjzhFFbKvbgxv4IsKhytJvTPUBWKRPxC7dcpcGvX7AzrPZsszUsfLg1gZdccPfcylHeo3G_ZMo71oDZ-12LuJBEJdFmWNLD_EeRa9Goeg9UdQ0-9zLcAOfQ2WaCU9ZNSsFe8E4gV_xHK4VLVfkGSSrcywjCxUSTyDeVp4Xc8sKxsOpJ3aUtex284NT9ruxRBrm_42ozzN95eTut-6VueZLcIb7MfjDnXAwSaMe7ScT04AHd9wGLMdR7C-LVOMKRO1_BAe-A&curl=https%3A%2F%2Fsin.creativecdn.com%2Fclicks%3Fid%3D20250408_WkqKJ0pB6luQ6GAX1mTq%26%7BEXTRA_CLICK_PARAMS%7D&tdc=sin',
      'https://sin.creativecdn.com/imp-delivery?tk=2WPss-9k8Vu7aJ3cmj4hfmiw3o2NPkzJ9KdXpKUz5lBL-Z7n_aLbjVkfFYJ0kXE3bvnBtmGsYTonmHR02WsEtVZvNRldMfq0lu9wRjD2SElKmCTvcf34-FoZQmuAXZnvJgWM0Lu3jH2j50GZaJPrjILXHovHg8gD_cXO2cGhHjPudK49ahIC1zelEB77Jw8EjPBUmHaYe197at-e80GvqgMlejNTfTrytPu9IAwD9EF2lA_nY7FX9VJEktO-TjUhvDRbgAs_Zp9SyGm7TqDYb5FwY-ZaYCk3YASOpm53VVm4j4CpeJN3ifuvpmcWBxocrVJWQtqWjGbYbdVNbErWhenTXclxCuE6_LNENlE1_Rhp8VDUQ2pe7D_CEa2nYsAX&curl=https://adclick.g.doubleclick.net/aclk%3Fsa%3DL%26ai%3DC8t0SsR31Z8-nN5zms8IP0srXoAbA8b7GbfW6gY24DsCNtwEQASAAYImj0oSoFIIBF2NhLXB1Yi0zNzA5NTY1OTY4MzY3ODc1yAEJqQLWDtU-miE9PuACAKgDAcgDAqoEgwJP0ELtHylmHxnnjDv4PO5RrvJsSTdPRWOMH_39wQAnGlHaSEZDE43JoSzSIM1g-hurd5K8EPnO6uUyvDboIKiaaRXsu43Anjk4raiinCSA8TwdNs78U9jsFRFn9W_P8tXEKMsJdFEg5JNBWSGrfaKzgPybXF0zS2kbEcL_hyjIyxNkL-sEFOIICLmZbzyAQPJJSoJrSGq6hLPFdJH5D4O9CfnuNXNIDb7gl8vHN3EBK4Ct4vhTybUMjyhr_SWSfR7iKQdymMDMvu7G5oC-ooEhSCija5cUWXzzTniKZAoZ69gRYhHaHK_lEloPrlXHrUHgQnK5Fh73APTq9NOY857387uR4AQBgAaqhJL0wrj9oowBoAYhqAemvhuoB5bYG6gHqpuxAqgH_56xAqgH35-xAqgHrb6xAtgHANIIJQiAYRABMgKKAjoMgECAwICAgKCogAIgSL39wTpYoYjt4r7IjAP6CwIIAYAMAeINEwikv-3ivsiMAxUc80wCHVLlFWTqDRMIrI_v4r7IjAMVHPNMAh1S5RVk0BUBgBcBshcOGAwqCjcxNTE3NDExMTA%26num%3D1%26sig%3DAOD64_0WmHvZKj_4IQY5FjuzZrAHGQYIsA%26client%3Dca-pub-3709565968367875%26adurl%3Dhttps%253A%252F%252Fsin.creativecdn.com%252Fclicks%253Fid%253D20250408_tB3imWAU60B14DeqfPZ9%2526%257BEXTRA_CLICK_PARAMS%257D&tdc=sin',
      'https://sakitibi.github.io/12nin.com/12ninad-1',
      'https://sin.creativecdn.com/imp-delivery?tk=_GCG8PY4Oh_cr0mbn9ENSRg0zuXhgPIu_mRdic2OAeanUF3qpveIfPmcIURPAdUr8YMb52qre2HiAAN4MbjGBaS-_7WSBrWPuQdop3NdGJHKOSrufvYn0J4tkn8NyhZx2DasTotcZIVUo6mP_rUSEfUFRDFRBQV5GykFSfep_-tGKl9dGTkKoJjQgSvYDXwf5vYY9bwfPXDY9Gyh5PDFR4vEbb_dQ88lYJmmFlMCVOdtaETBM6ykrINifGYTUqdCikfii3zFLivYrGJzghmskhEopQGZCOUJN9rmBk1UkbdZ1zClA0GNkpoWxLj2cipdlWDrU5KJENG43qDmx_Jw8WN__sBqEDAMJhjB1Ub6y-oLKxfk0Ov0A9t2KYVZ5YoRzR8QkNSXhc795e110XQiXA&curl=https://adclick.g.doubleclick.net/aclk%3Fsa%3DL%26ai%3DCkKb1USH1Z_TWAe3Ws8IPuJ-2oAjA8b7GbfW6gY24DsCNtwEQASAAYImj0oSoFIIBF2NhLXB1Yi04OTg5NjQ1OTE1MzEyOTIzyAEJqQKaYJoGdyo9PuACAKgDAcgDAqoEhQJP0OTKZRW4aLC6W-wuNZg9KUwz1hN-TcU5wKhcYivWpNaPbMckYvs5Rdwto1nryIeBIw9n72Ytac3HFaGafOPwU40vWqmoGN90YiS1g_2SArq8xrky2JNLrG4eot7V2c1Z2RJ-xxyVN-07GdZEL6v_iggLFZLVmr9UBZPWav0Cs82fc7bxDeoR9eLTfVOfdbxg4qPQQhGPgqe1NDy-fiZ9C7s9Pts6NqsLcVSioIL1lvYujz6-yL-b7tuwxGvFQfCNkXa2ZqcrKAX9VKo6qaBIHlKrJloMfkLKpLi-SHXH1Ubk4SVKMs2AsiuHyOq7yNrOhqoB3RTM0LkiRwsyZqiHTTP238bgBAGABqqEkvTCuP2ijAGgBiGoB6a-G6gHltgbqAeqm7ECqAf_nrECqAffn7ECqAetvrEC2AcA0gglCIBhEAEyAooCOgyAQIDAgICAoKiAAiBIvf3BOlj5-_ecwsiMA_oLAggBgAwB4g0TCNrJ-JzCyIwDFW3rTAIduI8NhOoNEwjVlvqcwsiMAxVt60wCHbiPDYTQFQGAFwGyFw4YDCoKOTE1NTUxOTMwMw%26num%3D1%26sig%3DAOD64_3IYQ-RyDk--pf-zmU5UJIHDWEdKg%26client%3Dca-pub-8989645915312923%26adurl%3Dhttps%253A%252F%252Fsin.creativecdn.com%252Fclicks%253Fid%253D20250408_0Al0Wk503sDzPKZCrqjH%2526%257BEXTRA_CLICK_PARAMS%257D&tdc=sin',
      'https://sin.creativecdn.com/imp-delivery?tk=pndfM6-8sGaQ4PP6BlYUexHZXv-BX74Lg7oByTJCxuL-ZN3Yz8AyVQRGNnoTdatkEpdkdRJ2e3bI4VTkgfkCN8haZUm5q1G0n8KeQy4XRcjQlgfYI1RozoO4BrHFyrx8P6b_aJalAHeKuZI9XY9OksmZx7mUsPoZe9FlvW8Cn5p2eH8WMW_lyaGmxEX-OWlrEjuZYMRyFcv_jKOWH4CFitsD5ryMCGhOdJubDzqEo9-l1Fc1XuL-m_H7D-05I7oKxMSN7XISnKFOU9XBdsRy7zzJsvmMKYlCE8GVnxXssbMI7_OEX-PjLFyTNmuIIi6Cr52r8jl_P-K5iWetaK2c6BSUys8l5K07Sn9_jGxFD_MnKdpI_fzMx3aEFWMe9-_CKv1VEAtFJwgSdgoyB41Xrg&curl=https%3A%2F%2Fsin.creativecdn.com%2Fclicks%3Fid%3D20250413_VIhV6c0zJq1udPbMeqGI%26%7BEXTRA_CLICK_PARAMS%7D&tdc=sin',
      'https://sin.creativecdn.com/imp-delivery?tk=cAgWKQr46wtwLkBjCjYEeF60JESuLe_XyOwhreGE_qhO2YT65_uttxsrJDjy_80iMaKm_3CfeQeal7nr6E8fIl_S6HZQ5HxjKKX323_bsFb8yxcSdhIW2auKS2Y0mlh0SAlLzeSFty44oFvPGa2PHhMHWjOVDUMv8Uy_xdz51BH9ROE1oL0WuO0cGZfAceO7Y4q4C0gTf_LPOMka1dZ0YN1MZbfM2cMa3RRayB2NSYNusuwCnpuuHz6wLBzNB9coKhbgdaO9V9OGcgFaEvlZqPVepg-DSXyensl5CnvgfFWLSKV4CVaX733bknhjvu5ORKLND0HDPX-URzezKfVele9k_kcyCFXxZWgY_2vhNUOZ-HzWuNtE0-Kraa_H9NYD86ZLP7OF471ym0bbzX_DkIzKBKLVaoOA240xigMIJkxcQL8lU20dMNZzckwhsQ5vvcAVhFzWFJI07xYpjncoYA&curl=https%3A%2F%2Fsin.creativecdn.com%2Fclicks%3Fid%3D20250413_ymK5ar7VT9PkA6s7gEWd%26%7BEXTRA_CLICK_PARAMS%7D&tdc=sin',
      'https://sin.creativecdn.com/imp-delivery?tk=XABbc0BQeZK9hF5OdGxouzR20sRbnUsn5g5XLH6jHuy2wOky6jz-b73FXM7Ajj69Og4BEfUGRKEtzlxes8R6vouQE-NfFZwwIcsmXzB9QV0jNDrkqom93TZf5aBwYOa1I5VSV_VyFQiMqBPtY3iOBDugGaoXm1IZD4B3YGu6hi213DhAQNosv6l5nIDGTCCsBQOLL8g3hT7ZfM7mqFFqvopV27JGVDmF5Ti7xgWaXALYmIc7U50STfcXGrFfmYfX6pNn1n9nrgtZr3TWOwvx_XfR4DF9b8-PGM5MYTjF9cBO57sG4rhMzx1wJK9TgYkW_X0lRzY9zncY5Dsk8ouuehgyZMRd3lWBmcoUc13J6eoNcrLQaXPuloR3ADemwzxiqLrkFqbjDlxD_zEv2WFHVSyo6S0Y8KApFpva7NbJ3UcHc2LaioQ6-geVV5koFegG4q8vlsoEEDoU0Pc7j-NWUw&curl=https%3A%2F%2Fsin.creativecdn.com%2Fclicks%3Fid%3D20250413_RdC1hMYicTrgE5Cveiuv%26%7BEXTRA_CLICK_PARAMS%7D&tdc=sin'
  ];

  for(var i = 0; i < iframes.length; i++) {
    iframes[i].src = urls[r];
    //一番上に移動
    location.href = '#';
  }
}
