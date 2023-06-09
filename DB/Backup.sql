PGDMP     :    3                {            proyecto2DB    15.1    15.1                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                        0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            !           1262    114854    proyecto2DB    DATABASE     �   CREATE DATABASE "proyecto2DB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Costa Rica.1252';
    DROP DATABASE "proyecto2DB";
                postgres    false            �            1259    114860    centro_medico    TABLE     �   CREATE TABLE public.centro_medico (
    id integer NOT NULL,
    nombre character varying(50),
    direccion character varying(50),
    telefono character varying(50)
);
 !   DROP TABLE public.centro_medico;
       public         heap    postgres    false            �            1259    114903 	   historial    TABLE     �   CREATE TABLE public.historial (
    id_reporte_medico character varying(50) NOT NULL,
    fecha date NOT NULL,
    hora character varying(50),
    seguimiento character varying(200),
    status character varying(200)
);
    DROP TABLE public.historial;
       public         heap    postgres    false            �            1259    114865 
   inventario    TABLE     �   CREATE TABLE public.inventario (
    id_centro_medico integer,
    nombre_producto character varying(50),
    cantidad_producto integer,
    capacidad_producto integer,
    fecha_vencimiento date
);
    DROP TABLE public.inventario;
       public         heap    postgres    false            �            1259    114873    medico    TABLE     +  CREATE TABLE public.medico (
    num_colegiado character varying(50) NOT NULL,
    nombre character varying(50),
    direccion character varying(50),
    telefono character varying(50),
    id_centro_medico integer,
    especialidad character varying(50),
    "contraseña" character varying(50)
);
    DROP TABLE public.medico;
       public         heap    postgres    false            �            1259    114855    paciente    TABLE     P  CREATE TABLE public.paciente (
    dpi character varying(50) NOT NULL,
    nombre character varying(50),
    direccion character varying(50),
    telefono character varying(50),
    altura character varying(50),
    masa_corporal character varying(50),
    peso character varying(50),
    enfermedades_herencia character varying(50)
);
    DROP TABLE public.paciente;
       public         heap    postgres    false            �            1259    114883    reporte_medico    TABLE     Q  CREATE TABLE public.reporte_medico (
    id_reporte character varying(50) NOT NULL,
    id_paciente character varying(50),
    id_medico character varying(50),
    enfermedad_tratada character varying(50),
    medicamento_suministrado character varying(50),
    examenes_realizados character varying(50),
    id_centro_medico integer
);
 "   DROP TABLE public.reporte_medico;
       public         heap    postgres    false                      0    114860    centro_medico 
   TABLE DATA           H   COPY public.centro_medico (id, nombre, direccion, telefono) FROM stdin;
    public          postgres    false    215    $                 0    114903 	   historial 
   TABLE DATA           X   COPY public.historial (id_reporte_medico, fecha, hora, seguimiento, status) FROM stdin;
    public          postgres    false    219   8%                 0    114865 
   inventario 
   TABLE DATA           �   COPY public.inventario (id_centro_medico, nombre_producto, cantidad_producto, capacidad_producto, fecha_vencimiento) FROM stdin;
    public          postgres    false    216   	'                 0    114873    medico 
   TABLE DATA           {   COPY public.medico (num_colegiado, nombre, direccion, telefono, id_centro_medico, especialidad, "contraseña") FROM stdin;
    public          postgres    false    217   �(                 0    114855    paciente 
   TABLE DATA           x   COPY public.paciente (dpi, nombre, direccion, telefono, altura, masa_corporal, peso, enfermedades_herencia) FROM stdin;
    public          postgres    false    214   �*                 0    114883    reporte_medico 
   TABLE DATA           �   COPY public.reporte_medico (id_reporte, id_paciente, id_medico, enfermedad_tratada, medicamento_suministrado, examenes_realizados, id_centro_medico) FROM stdin;
    public          postgres    false    218   �,       {           2606    114864     centro_medico centro_medico_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.centro_medico
    ADD CONSTRAINT centro_medico_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.centro_medico DROP CONSTRAINT centro_medico_pkey;
       public            postgres    false    215            �           2606    114909    historial historial_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.historial
    ADD CONSTRAINT historial_pkey PRIMARY KEY (id_reporte_medico, fecha);
 B   ALTER TABLE ONLY public.historial DROP CONSTRAINT historial_pkey;
       public            postgres    false    219    219            }           2606    114877    medico medico_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.medico
    ADD CONSTRAINT medico_pkey PRIMARY KEY (num_colegiado);
 <   ALTER TABLE ONLY public.medico DROP CONSTRAINT medico_pkey;
       public            postgres    false    217            y           2606    114859    paciente paciente_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.paciente
    ADD CONSTRAINT paciente_pkey PRIMARY KEY (dpi);
 @   ALTER TABLE ONLY public.paciente DROP CONSTRAINT paciente_pkey;
       public            postgres    false    214                       2606    114887 "   reporte_medico reporte_medico_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.reporte_medico
    ADD CONSTRAINT reporte_medico_pkey PRIMARY KEY (id_reporte);
 L   ALTER TABLE ONLY public.reporte_medico DROP CONSTRAINT reporte_medico_pkey;
       public            postgres    false    218            �           2606    114910 *   historial historial_id_reporte_medico_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.historial
    ADD CONSTRAINT historial_id_reporte_medico_fkey FOREIGN KEY (id_reporte_medico) REFERENCES public.reporte_medico(id_reporte);
 T   ALTER TABLE ONLY public.historial DROP CONSTRAINT historial_id_reporte_medico_fkey;
       public          postgres    false    3199    218    219            �           2606    114868 +   inventario inventario_id_centro_medico_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.inventario
    ADD CONSTRAINT inventario_id_centro_medico_fkey FOREIGN KEY (id_centro_medico) REFERENCES public.centro_medico(id);
 U   ALTER TABLE ONLY public.inventario DROP CONSTRAINT inventario_id_centro_medico_fkey;
       public          postgres    false    3195    215    216            �           2606    114878 #   medico medico_id_centro_medico_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.medico
    ADD CONSTRAINT medico_id_centro_medico_fkey FOREIGN KEY (id_centro_medico) REFERENCES public.centro_medico(id);
 M   ALTER TABLE ONLY public.medico DROP CONSTRAINT medico_id_centro_medico_fkey;
       public          postgres    false    3195    215    217            �           2606    114898 3   reporte_medico reporte_medico_id_centro_medico_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.reporte_medico
    ADD CONSTRAINT reporte_medico_id_centro_medico_fkey FOREIGN KEY (id_centro_medico) REFERENCES public.centro_medico(id);
 ]   ALTER TABLE ONLY public.reporte_medico DROP CONSTRAINT reporte_medico_id_centro_medico_fkey;
       public          postgres    false    218    215    3195            �           2606    114893 ,   reporte_medico reporte_medico_id_medico_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.reporte_medico
    ADD CONSTRAINT reporte_medico_id_medico_fkey FOREIGN KEY (id_medico) REFERENCES public.medico(num_colegiado);
 V   ALTER TABLE ONLY public.reporte_medico DROP CONSTRAINT reporte_medico_id_medico_fkey;
       public          postgres    false    3197    218    217            �           2606    114888 .   reporte_medico reporte_medico_id_paciente_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.reporte_medico
    ADD CONSTRAINT reporte_medico_id_paciente_fkey FOREIGN KEY (id_paciente) REFERENCES public.paciente(dpi);
 X   ALTER TABLE ONLY public.reporte_medico DROP CONSTRAINT reporte_medico_id_paciente_fkey;
       public          postgres    false    218    3193    214                 x�u�Kj�0��|�!�8h,Y������l�"��V�#�ި���*����B��Q���#x�q�F�R�"G��ZGn���D��@�PZ-e���9QSi��� �'h.��$n���K�*��̢Z�}�'��@J~&��O�.�5J��wc�������D�zEPXks�%���ާ�<�4;��ƪr�+V�˺�gˈ�w�F)^�<�崻�M�:�+�6X�Jώ{ǯ|�'�����1&7j�k�5��^vY����         �  x��T�n�0<�_�P@R��V���\6�Z%@r>�4_�e����n� {DjfwfGJ)Ui��Z�Z�J�{)����P�k� "���5�ˁ���oё� ����/�B�6��Lr����h��BU+Y)]X���Q��cL}��@�����	����z�}����w�ڞ�w�u���<��#�k�lS����	Z�:P�3�ppU�ר�����O����8��`Z���kR}w��lK�{�l�CO,v�)q�5�6�n*�������؎.9z�5q��:�i�v\�R���{�ƶ���0�[�)w�n�D�h�2������-E�H�x�Ǹ��������Z��D^��O��s^���E�y��\���V<�@S8ٮ���.�6eM�kn��[`H��1�S���LY���}��Y �����#?[�Ǜ�j�?��d         �  x���An�0E��.T�'��R�U7t��H#�
�=C�B��?�� ��?�Q�B�
5R�M���{������j��u.	���O�O�(o��X�J`_o�{wW-�J�_?���ڎ�e���2頙��n�"2ۚ�e�n
QA2�<FF���D_��ZQ\��cb�4L�c�Zz���lƈ�q��*{p�a��e��*�)ۄ���0��z�#J(]z�E(]Bi��S"q�:|�b2V◥C�!�t��E䘸�J�R�?�Y(Ȝ�d�]-�x�ԯ���8�e�xQ̦�&��ۢ )��d�y	��J>H%��wS�'R�'R�����e��P���H��w	6B�@r���ߧ2m!m~J�"�*p6��������l;D��:�9�8��9֝p�;�X������(~�b�         �  x�]��n�0�מ��	"|��r�J���eҮ�9B����.�Z}��X�����A���\>ӚRV׌|���N6�O ��s�Fu-$#O���+L���/�1uC�#��~A�Cu�C�;�	_9�2����s���p�0�8'xq��������Кk���a~�9\�:9��� eO��J'9B�N��SC�<_�H���1L/N���^2$'#D6	� ����C�6Ԋ�8 �q⛝���c�Ш]��TO~��n��J�e�<N��~�?8t~'^�D�҉���0�z��cS*b5U�$�ɶX����H�f�Ӄm���B�՜G�$����3"�"�������*�qT�Չ�=���$B���q�������4_-�qWZ6f��)��b,[����)tM*��h�WYq���>�ֻW����u3Ε���Q˖����,[�=:�e���&��u+�P�V�e���sw<|��#ޏM^��F�,1�}y���T]         �  x�]S͎�0>O�'@�`�m�m���j��z�+�D��Iy����J���5*m�D�p�'*c�^�n�w�P$Z�F���*@�@��A���9��D���4��o�?�3��E�<��(S+�^��;Q5A݌=%�#�c*#�����ؠ�� 2-��D_M@?#�)^�s��]Y�m��I����X�S7}*ס����Oe�t&h�P7A���]��-T3r��>Ŏ��r����{D�fUۉ}�,�+�3?"�6�u���y�$� ~��e:�.�
���e?w�_��M���BX�K�T�VuH�ؓ8�(sj(7�4�~'�9��k#�2��kiof��b��SN�O٭�D�8�R�������u��p��&x�f<���f�����/>Sn�n{���&�����XR�H|�p]�u�	^qc����5�4�^KKY���޲�mf�q:���iP�6��m&�����o�Y�ie�5&Tܯ�KS��Ͳ�_uUU� ���         +  x���M�1���S� ��'�,3�AH�bŦҩ4�ܮ�vGQnĂG��Q�"FԪ����秔RB�U�LՔ�T���K�t�5����4�+�mpԂ�j�� �̼(yDD�2c�2c�i`�ڂX�G+�(H��-A���C����3Ϡ�<���ڋ%:�d�&��el��+�CZb��۸8���5���E"�Ol�jO�#C�͆GD�MV7_d�'p�E�F[�kK;�b=��F���)��H�����-Z�5y6�j����w��{�d��l���>~��f3�X^C��s�xwU��Չ��z��zz�=̋?�q���G�_�(ϭ�C��';:����EeEU�R���b���Ұ��^����:��;r,C��A���V���B]�Pՙv��~S���v��FY����$j����U�ΪK+��9��&9ץٌl��D~D�ϧ��A;b�1�[����6�è=[��i�A���{m���K��N��!�=�ܚ&5Z��\�u�aG�/�7p����b��j�X�?c}�cO�U��Qs{��P?�(��'*&_�     